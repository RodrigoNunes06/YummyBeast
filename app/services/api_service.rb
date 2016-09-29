class ApiService
  def initialize(params)
    @term = params[:term]
    @limit = 16
    @location = "Barcelona"
  end

  def search
    begin
      parameters = { term: @term, limit: @limit }
      results = Yelp.client.search(@location, parameters).businesses
    rescue

      # handle_error
      false
    end
  end

end