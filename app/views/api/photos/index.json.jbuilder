@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :author_id, :comment_ids
    json.comments photo.comments
    json.author photo.author.username
  end
end
