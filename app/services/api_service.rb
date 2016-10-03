class ApiService

  def initialize(params)
    @term = params[:term]
    @limit = 30
    @latitude = params[:latitude]
    @longitude = params[:longitude]
    
    @client = GooglePlaces::Client.new(ENV['GOOGLE_PLACES_KEY'])
  end

end