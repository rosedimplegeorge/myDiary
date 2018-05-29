class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :reviewer_name
      t.string :review
      t.integer :recipe_id
      t.references :recipe, foreign_key: true

      t.timestamps
    end
  end
end
