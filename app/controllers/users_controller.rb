class UsersController < ApplicationController
  
  before_action :authorize_user, only: [:show]

  def home
    @name = current_user ? @current_user.username : "Stranger"
  end

  def index

  end

  def new

  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to '/'
    else
      redirect_to '/signup'
    end
  end 

  def show
    @user = User.find_by(params[:id])

    if current_user == @user
      render :show
    else
      render :error
    end

  end


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end

end
