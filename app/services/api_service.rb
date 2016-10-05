class ApiService

  def initialize(params)

    @term = params[:term]
    @limit = 20
    @latitude = params[:latitude]
    @longitude = params[:longitude]
    if params[:radius]
      @radius = params[:radius].to_i
    else
      @radius = 1000
    end 
  
  end

end