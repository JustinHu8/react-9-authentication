import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  coursesState: courseReducer,
});

export default rootReducer;