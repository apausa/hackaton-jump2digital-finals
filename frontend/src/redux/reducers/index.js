import { combineReducers } from 'redux';
import bankReducer from './bankReducer';

// For scalability purposes.
export default combineReducers({
  bank: bankReducer
});
