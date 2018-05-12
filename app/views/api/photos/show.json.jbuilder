json.photo do
  json.extract! @photo, :id, :title, :description, :author_id, :comment_ids
  json.authorName @photo.author.username
end
