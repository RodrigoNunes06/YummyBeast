class GoogleService < ApiService

  def search
    begin
      results_google = @google_client.spots(@latitude.to_f, @longitude.to_f,:name => @term, :types => 'restaurant', :radius => 1000)
    rescue
      # handle_error
      false
    end
  end

end