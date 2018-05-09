class RemovePreferenceFromPreferences < ActiveRecord::Migration[5.2]
  def change
    remove_column :preferences, :preference, :boolean
  end
end
