class Recipe < ApplicationRecord

  mount_uploader :picture, RecipePhotoUploader

  validates :name, presence: true
  validates :ingredients, presence: true
  validates :steps, presence: true
  validates :type, presence: true
  validates :picture, presence: true

  belongs_to :user
  has_many :preferences


end
