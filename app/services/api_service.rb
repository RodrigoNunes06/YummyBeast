class ApiService
  def initialize(params)
    @term = params[:term]
    @limit = 16
    @latitude = params[:latitude]
    @longitude = params[:longitude]
  end

  def search
    begin
      parameters = { term: @term, limit: @limit, radius_filter: 800 }
      coordinates = {latitude:@latitude,longitude:@longitude}
      results = Yelp.client.search_by_coordinates(coordinates, parameters).businesses
    rescue

      # handle_error
      false
    end
  end

end