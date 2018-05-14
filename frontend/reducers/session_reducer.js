import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SIGNUP_ERRORS,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case RECEIVE_SIGNUP_ERRORS:
      debugger
      let newState = Object.assign({}, state, {errors: action.errors});
      debugger
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
