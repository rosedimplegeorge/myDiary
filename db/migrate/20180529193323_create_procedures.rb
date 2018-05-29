class CreateProcedures < ActiveRecord::Migration[5.2]
  def change
    create_table :procedures do |t|
      t.string :title
      t.string :description
      t.string :photo_url
      t.integer :recipe_id
      t.references :recipe, foreign_key: true

      t.timestamps
    end
  end
end
