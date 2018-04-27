class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image?
  mount_uploader :image, ImageUploader

 def posted_time
   created_at.strftime("%Y-%m-%d %H:%M:%S")
 end

end
