class RecipesController < ApplicationController

  def new
        @recipe = Recipe.new
  end

  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.user = current_user
      if @recipe.save
        flash[:notice] = "Recipe added to the mix!"
        redirect_to "/"

      else
        flash[:notice] = @recipe.errors.full_messages.join(", ")
        render :new
      end
  end

  def show
      @recipe = Recipe.find(params[:id])
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:recipe, :picture)
  end


  private

  def recipe_params
    params.require(:recipe).permit(:name, :ingredients, :steps, :category, :picture)
  end
end
