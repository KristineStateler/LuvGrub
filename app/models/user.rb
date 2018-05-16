class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :omniauthable, omniauth_providers: %i[facebook]

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

         has_many :preferences
         has_many :preferred_recipes, through: :preferences, source: :recipe, class_name: "Recipe"

         def self.new_with_session(params, session)
  super.tap do |user|
    if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
      user.email = data["email"] if user.email.blank?
    end
  end
end

# def liked_recipes
#   # look for current user preferenes where like is true for each of those find related recipe
#
#   # methoed return an array of all the recipes that have been liked
# end
#
# def disliked_recipes
# end

def self.from_omniauth(auth)
  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    user.email = auth.info.email
    user.password = Devise.friendly_token[0,20]
    user.name = auth.info.name   # assuming the user model has a name
    user.image = auth.info.image # assuming the user model has an image
  end
end

end
