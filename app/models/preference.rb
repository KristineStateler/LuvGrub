class Preference < ApplicationRecord

  validates :preference


  belongs_to :review
  belongs_to :user

end
