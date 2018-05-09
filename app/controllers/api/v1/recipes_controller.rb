class Api::V1::RecipesController < ApplicationController
  def index
    render json: Recipe.all
  end

  def show
    render json: { recipe: Recipe.find(params[:id]), user_id: current_user}
  end
end
