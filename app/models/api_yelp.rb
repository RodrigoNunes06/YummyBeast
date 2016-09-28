class ApiYelp < ApplicationRecord

  def self.search(location, term)
    result_by_name = ApiYelp.find_by(name: term).limit(10)
    result_by_category = ApiYelp.where(category: term).limit(10)
    if result_by_name
      render json: result_by_name 
    elsif result_by_category
      render json: result_by_category
    else 
      result = Yelp.client.search(location, term).businesses
      result.each do |restaurant|
        new = ApiYelp.create(
         name: restaurant.name
         category: restaurant.categories
         rating: restaurant.rating
         image: restaurant.image_url
         rating: restaurant.rating_img
        )
        ApiYelp.search(location,term)
      end

    end
  end

end
