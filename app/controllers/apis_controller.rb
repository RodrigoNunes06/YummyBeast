
class ApisController < ApplicationController

  def google
    results_google = GoogleService.new({
      term: params[:term],
      latitude: params[:coordinates][:lat],
      longitude: params[:coordinates][:lng]
    }).search
    render json: results_google
  end

  def yelp
    results_yelp = YelpService.new({
      term: params[:term],
      latitude: params[:coordinates][:lat],
      longitude: params[:coordinates][:lng]
    }).search
    
    render json: results_yelp
  end

end


