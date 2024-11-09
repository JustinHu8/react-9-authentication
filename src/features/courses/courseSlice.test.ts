import { configureStore } from '@reduxjs/toolkit';
import fetchMock from 'jest-fetch-mock';
import { fetchCourses, toggleEnrollment, CoursesState } from './courseSlice';
import { Course } from '../../types/course';
import courseReducer from './courseSlice';

fetchMock.enableMocks();

describe('courseSlice with configureStore', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should handle toggleEnrollment action', () => {
    const initialState: CoursesState = {
      courses: [{ id: 1, title: 'Test Course', isEnrolled: false, description: 'Test description', lessons: 0 }],
      loading: false,
      error: null,
    };
    const store = configureStore({
      reducer: { courses: courseReducer },
      preloadedState: { courses: initialState },
    });

    store.dispatch(toggleEnrollment(1));
    const state = store.getState().courses as CoursesState;
    expect(state.courses[0].isEnrolled).toEqual(true);
  });

  it('should fetch courses and update state', async () => {
    const courses: Course[] = [{
      id: 1, title: 'Test Course', isEnrolled: false,
      description: '',
      lessons: 0,
    }];
    fetchMock.mockResponseOnce(JSON.stringify(courses));

    const initialState: CoursesState = { courses: [], loading: false, error: null };
    const store = configureStore({
      reducer: { courses: courseReducer },
      preloadedState: { courses: initialState },
    });

    // Dispatch the thunk action
    await store.dispatch(fetchCourses() as any);

    const state = store.getState().courses as CoursesState;
    expect(state.courses.length).toBe(1);
    expect(state.courses[0].title).toBe('Test Course');
  });
});