
class ApisController < ApplicationController

  def search
    parameters = { term: params[:term], limit: 10 }
    ApiYelp.search('Barcelona',parameters)
  end

end


