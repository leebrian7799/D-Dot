class Photo < ApplicationRecord
  validates :title, presence: { message: 'Enter a title' }
  validates :author, presence: true
  has_attached_file :image, default_url: "default.img" #,  styles: {original: "150x150#" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id

  has_many :comments,
  class_name: 'Comment',
  foreign_key: :photo_id

end
