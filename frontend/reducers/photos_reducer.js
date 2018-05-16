import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import { LOG_OUT } from '../actions/session_actions';

const photosReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      return action.photos;
    case RECEIVE_PHOTO:
      newState = Object.assign({}, state, {[action.photo.id]: action.photo});
      return newState;
    case REMOVE_PHOTO:
      newState = Object.assign({}, state);
      delete newState[action.photo.photo.id];
      return newState;
    case LOG_OUT:
      return {};
    default:
      return state;
  }
};

export default photosReducer;
