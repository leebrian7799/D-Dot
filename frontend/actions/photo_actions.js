import * as PhotosApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = 'RECEIVE_PHOTOS';
export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

export const receiveAllPhotos = (photos) => (
  {
    type: RECEIVE_ALL_PHOTOS,
    photos
  }
);

export const receivePhoto = (photo) => (
   {
    type: RECEIVE_PHOTO,
    photo
  }
);

export const removePhoto = (photo) => (
   {
    type: REMOVE_PHOTO,
    photo: photo
  }
);

export const receivePhotoErrors = (errors) => (
   {
    type: RECEIVE_PHOTO_ERRORS,
    errors
  }
);

export const fetchAllPhotos = () => dispatch => (
    PhotosApiUtil.fetchAllPhotos().then(
      photos => dispatch(receiveAllPhotos(photos))
    )
);

export const fetchSinglePhoto = (id) => dispatch => (
    PhotosApiUtil.fetchPhoto(id).then(
      photo => dispatch(receivePhoto(photo))
    )
);

export const createPhoto = (photo) => dispatch => (
    PhotosApiUtil.createPhoto(photo).then(
      photo => dispatch(receiveSinglePhoto(photo))
    ).fail(
      errors => dispatch(receivePhotoErrors(errors))
    )
);

export const updatePhoto = (photo) => dispatch => (
    PhotosApiUtil.updatePhoto(photo).then(
      photo => dispatch(receivePhoto(photo))
    )
);

export const deletePhoto = (photo) => dispatch => (
    PhotosApiUtil.deletePhoto(photo.id).then(
      photo => dispatch(removePhoto(photo))
    )
);
