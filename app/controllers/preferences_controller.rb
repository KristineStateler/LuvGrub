class RecipesController < ApplicationController


def index
  @preference = Preference.new
end
def show
  @id = params[:id]
  @preference = Preference.find(@id)
  @user = @preference.user
end


end
