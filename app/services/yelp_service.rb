class YelpService < ApiService

  def search
    begin
      
      parameters = { term: @term, limit: @limit, radius_filter: 1000 }
      coordinates = {latitude:@latitude,longitude:@longitude}
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
      
      results_yelp.push({
        name: restaurant.name, 
        rating: restaurant.rating, 
        lat: restaurant.location.coordinate.latitude,  
        lng: restaurant.location.coordinate.longitude
      })

    end

    results_yelp

  end

end