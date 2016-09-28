class CreateApiYelps < ActiveRecord::Migration[5.0]
  def change
    create_table :api_yelps do |t|
      t.string :name
      t.string :category
      t.float :rating
      t.string :image
      t.string :ratingimage
      t.boolean :isclosed
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
