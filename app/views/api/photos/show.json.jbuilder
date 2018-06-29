  json.extract! @photo, :id, :title, :description, :author_id
  json.author @photo.author.username
  json.image @photo.image
