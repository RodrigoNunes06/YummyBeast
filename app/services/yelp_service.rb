class YelpService < ApiService

  def search
    begin
      parameters = { term: @term, limit: @limit, radius_filter: 1000 }
      coordinates = {latitude:@latitude,longitude:@longitude}
      results_yelp = Yelp.client.search_by_coordinates(coordinates, parameters).businesses
    rescue

      # handle_error
      false
    end
  end

end