class Api::V1::PreferencesController < ApplicationController

  def index

  end

  def destroy
    @id = params[:id]
    @preference = Preference.find(@id)
    @user = @preference.user
  end

  def create
    data = JSON.parse(request.body.read)
    recipe = Recipe.find(data["id"])
    type = data["type"]
    if type == "superLike"
      Preference.create(user: current_user, recipe: recipe, superlike: true)
    else
      Preference.create(user: current_user, recipe: recipe)
    end
    render json: recipe
  end
