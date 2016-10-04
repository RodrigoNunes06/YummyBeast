class ApiService

  def initialize(params)

    @term = params[:term]
    @limit = 50
    @latitude = params[:latitude]
    @longitude = params[:longitude]
  
  end

end