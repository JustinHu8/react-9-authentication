import { Dispatch } from 'redux';

export const fetchCourses = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_COURSES_REQUEST' });
    try {
      const response = await fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/courseCards');
      const data = await response.json();
      dispatch({ type: 'FETCH_COURSES_SUCCESS', payload: data });
    } catch (error: any) {
      dispatch({ type: 'FETCH_COURSES_FAILURE', payload: error.message });
    }
  };
};
