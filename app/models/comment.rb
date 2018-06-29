class Comment < ApplicationRecord
  validates :author_id, :photo_id, :comment_body, presence: true

  belongs_to :photo
  belongs_to :user,
  class_name: 'User',
  foreign_key: :author_id

end
