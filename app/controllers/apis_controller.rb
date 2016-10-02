
class ApisController < ApplicationController

  def search
    results = YelpService.new({
      term: params[:term],
      latitude: params[:coordinates][:lat],
      longitude: params[:coordinates][:lng]
    }).search

    render json: results
  end

end


