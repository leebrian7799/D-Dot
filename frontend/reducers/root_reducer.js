
import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';

const rootReducer = combineReducers({
  errors,
  session,
});

export default rootReducer;
