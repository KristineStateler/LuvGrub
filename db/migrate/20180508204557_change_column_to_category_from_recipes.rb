class ChangeColumnToCategoryFromRecipes < ActiveRecord::Migration[5.2]
  def change
    rename_column :recipes, :type, :category
  end
end
