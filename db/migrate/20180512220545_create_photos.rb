class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :title
      t.text :description
      t.string :file_name
      t.integer :author_id
      t.integer :comment_ids

      t.timestamps
    end
    add_index :photos, :author_id
  end
end
