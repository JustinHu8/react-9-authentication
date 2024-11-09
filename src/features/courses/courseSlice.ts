import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Course } from '../../types/course';

// Define the initial state for the course feature
export interface CoursesState {
  courses: Course[];
  loading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  courses: [],
  loading: false,
  error: null,
};

// Create async thunk for fetching courses
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards');
  const data = await response.json();
  // Check if enrolled exists, if not, set it to false
  return data.map((course: Course) => ({
    ...course,
    isEnrolled: course.isEnrolled !== undefined ? course.isEnrolled : false,  // Only set enrolled to false if it doesn't exist
  }));
});

// Create a slice for courses
const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    toggleEnrollment: (state, action) => {
      const course = state.courses.find(c => c.id === action.payload);
      if (course) {
        course.isEnrolled = !course.isEnrolled;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.courses = action.payload;
        state.loading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch courses';
      });
  },
});

export const { toggleEnrollment } = courseSlice.actions;

export default courseSlice.reducer;