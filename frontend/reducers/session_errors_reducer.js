import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  debugger
  console.log(action);
  console.log(state);
  console.log(action.errors);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
