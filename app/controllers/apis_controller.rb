
class ApisController < ApplicationController

  # def search
  #   parameters = { term: params[:term], limit: 16 }
  #   results = Yelp.client.search('Barcelona', parameters).businesses

  #   render json: results
  # end

  def search
    results = ApiService.new({
      term: params[:term]
    }).search

    render json: results
  end

end


