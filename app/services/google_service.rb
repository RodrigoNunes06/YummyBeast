class GoogleService < ApiService

  def initialize
    @client = GooglePlaces::Client.new(ENV['GOOGLE_PLACES_KEY'])
  end

  def search
    result_google = @client.spots(@latitude,@longitude, :types => ['restaurant','food'], :radius => 1000)
  end

end