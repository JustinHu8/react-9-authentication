import { Course } from '../types/course';

const initialState = {
  courses: [] as Course[],
  loading: false,
  error: null as string | null,
};

const courseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'FETCH_COURSES_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_COURSES_SUCCESS':
      return { ...state, loading: false, courses: action.payload };
    case 'FETCH_COURSES_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default courseReducer;