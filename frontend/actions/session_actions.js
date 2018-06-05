import * as APIUtil from '../util/session_api_util';
import {receiveErrors, clearErrors} from './error_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOG_OUT = 'LOG_OUT';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});


export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => {
    dispatch(receiveCurrentUser(user));
    dispatch(clearErrors());
  }, errors => {
    return dispatch(receiveErrors(errors.responseJSON));
  })
);

export const resetState = () =>
  (
    {
      type: LOG_OUT
    }

  );


export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(
    (response) => {
      dispatch(resetState());
      dispatch(receiveCurrentUser(null));
    }
  )
)
