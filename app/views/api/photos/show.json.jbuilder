json.photo do
  json.extract! @photo, :id, :title, :description, :author_id
  json.authorName @photo.author.username
end
