class YelpService < ApiService

  def search
    begin
      
      parameters = { 
        term: @term, 
        limit: @limit, 
        radius_filter: @radius
      }

      coordinates = {
        latitude:@latitude,
        longitude:@longitude
      }

      results = Yelp.client.search_by_coordinates(coordinates, parameters).businesses
      

      map_results(results)

    rescue

      # handle_error
      false
    end
  end

  private

  def map_results(results)
    
    results_yelp = []

    results.each do |restaurant|

      rating_control = restaurant.rating
      location_control = restaurant.location.coordinate.latitude
      open_control = restaurant.is_closed
      review_count = restaurant.review_count

      if rating_control > 0 && location_control && open_control == false && review_count > 3 
        results_yelp.push({
          name: restaurant.name, 
          rating: restaurant.rating, 
          lat: restaurant.location.coordinate.latitude,  
          lng: restaurant.location.coordinate.longitude,
          provider: "yelp",
          url: restaurant.url,
          rating_image: restaurant.rating_img_url
        })
      end
    end

    results_yelp

  end

end