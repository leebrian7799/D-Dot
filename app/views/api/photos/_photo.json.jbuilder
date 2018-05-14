json.image_url photo.image.url
json.thumb_url photo.image.url(:thumb)
json.preview_url asset_path(photo.image.url)

json.author photo.author.username
