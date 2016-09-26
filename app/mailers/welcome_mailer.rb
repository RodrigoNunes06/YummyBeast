class WelcomeMailer < ApplicationMailer
  default from: "rodrigo.nunes06@gmail.com" 

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Yummy Beast welcomes you, #{@user.username}!" )
  end

end
