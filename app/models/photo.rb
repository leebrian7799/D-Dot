class Photo < ApplicationRecord
  validates :title, presence: { message: 'Enter a title' }
  validates :author, presence: true

  belongs_to :author,
  class_name: 'User',
  foreign_key: :

  has_many :comments,
  class_name: 'Comment',
  foreign_key: :photo_id

end
