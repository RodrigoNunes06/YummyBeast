class ApiService

  def initialize(params)
    @term = params[:term]
    @limit = 20
    @latitude = params[:latitude]
    @longitude = params[:longitude]
    
    @google_client = GooglePlaces::Client.new(ENV['GOOGLE_PLACES_KEY'])
  end

end