class CreatePreferences < ActiveRecord::Migration[5.2]
  def change
    create_table :preferences do |t|
      t.boolean :preference, default: false
      t.belongs_to :user, null: false
      t.belongs_to :recipe, null: false

      t.timestamps
    end
  end
end
