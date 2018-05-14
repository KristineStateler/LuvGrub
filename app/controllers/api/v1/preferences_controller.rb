class Api::V1::PreferencesController < ApplicationController

  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: current_user.preferred_recipes
  end

  def show
    @id = params[:id]
    @preference = Preference.find(@id)
    @user = @preference.user
  end

  def create
    data = JSON.parse(request.body.read)
    recipe = Recipe.find(data["id"])
    type = data["type"]
    if type == "right"
      Preference.create(user: current_user, recipe: recipe, preference: true)
    else
      Preference.create(user: current_user, recipe: recipe)
    end
    render json: recipe
  end
end
