class GoogleService < ApiService

  # ENV['GOOGLE_PLACES_KEY']

  def search
    begin
      results_google = @client.spots(@latitude.to_f, @longitude.to_f,:name => @term, :types => 'restaurant', :radius => 1000)
    rescue
      # handle_error
      false
    end
  end

end