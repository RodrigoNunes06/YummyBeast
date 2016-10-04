class GoogleService < ApiService

  def initialize(params)
    super
    @google_client = GooglePlaces::Client.new(ENV['GOOGLE_PLACES_KEY'])
  end

  def search
    begin
      results = @google_client.spots(@latitude.to_f, @longitude.to_f,:name => @term, :types => 'restaurant', :radius => 1000)
      map_results(results)
    rescue
      # handle_error
      false
    end
  end

  private

  def map_results(results)
    results_google = []

    results.each do |restaurant|
      
      results_google.push({
        name: restaurant.name, 
        rating: restaurant.rating, 
        lat: restaurant.lat,  
        lng: restaurant.lng
      })

    end

    results_google

  end

end