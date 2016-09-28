
class ApisController < ApplicationController

  def search
    parameters = { term: params[:term], limit: 16 }
    render json: Yelp.client.search("Barcelona", parameters)
  end

end


