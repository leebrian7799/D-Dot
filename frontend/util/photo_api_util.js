export const fetchAllPhotos = () => (
  $.ajax({
    method: 'GET',
    url: 'api/photos'
  })
);

export const fetchPhoto = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  })
);

export const createPhoto = (formData) => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    contentType: false,
    processData: false,
    data: formData
  })
);

export const updatePhoto = (photo) => (
  $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: photo
  })
);

export const deletePhoto = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  })
);
