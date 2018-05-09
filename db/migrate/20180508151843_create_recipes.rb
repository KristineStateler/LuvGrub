class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :ingredients, null: false
      t.text :steps, null: false
      t.string :type, null: false

      t.belongs_to :user

      t.timestamps
    end
  end
end
