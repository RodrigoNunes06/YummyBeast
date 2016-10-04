class ApiService

  def initialize(params)
    
    @term = params[:term]
    @limit = 20
    @latitude = params[:latitude]
    @longitude = params[:longitude]
  
  end

end