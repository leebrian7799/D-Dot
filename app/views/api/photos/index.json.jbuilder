@photos.each do |photo|
  json.set! photo.id do
    json.extract! photo, :id, :title, :description, :author_id
    json.author photo.author.username
    json.image photo.image
  end
end
