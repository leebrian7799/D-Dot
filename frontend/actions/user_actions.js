import * as UserApiUtil from '../util/user_api_util.js';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';


export const receiveAllUsers = (users) => (
  {
    type: RECEIVE_ALL_USERS,
    users
  }
)

export const receiveSingleUser = (user) => (
  {
    type: RECEIVE_SINGLE_USER,
    user
  }
)


export const fetchAllUsers = (users) => dispatch => (
  UserApiUtil.fetchUsers().then((users) =>
  dispatch(receiveAllUsers(users)));
)

export const fetchSingleUsers = (user) => dispatch => (
  UserApiUtil.fetchUser().then((user) =>
  dispatch(receiveSingleUser(user)));
)
