import {
  RECEIVE_ALL_USERS,
  RECEIVE_SINGLE_USER } from '../actions/user_actions';
import {
  RECEIVE_PHOTO,
  RECEIVE_SHOW_PHOTO } from '../actions/photo_actions';
import { LOG_OUT } from '../actions/session_actions';


const UserReducer (state = {}, action){
  switch (action.type) {
    case fetchUsers:
      return action.users
    case fetchUser:
      return newState = merge({}, state, action.user);
    case updateUser:
      let newState = merge({}, state)
      return newState = merge({}, state, action.user);
    case LOG_OUT:
      return {};
    default:
      return state;

  }

};

export default const UserReducer;
