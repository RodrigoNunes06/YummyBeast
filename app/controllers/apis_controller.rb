
class ApisController < ApplicationController

  def search
    # results_yelp = YelpService.new({
    #   term: params[:term],
    #   latitude: params[:coordinates][:lat],
    #   longitude: params[:coordinates][:lng]
    # }).search

    results_google = GoogleService.new({
      term: params[:term],
      latitude: params[:coordinates][:lat],
      longitude: params[:coordinates][:lng]
    }).search
    render json: results_google
  end

end


