class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def facebook
    puts "AAAAAAHHHHH Hello from the facebook controller wooooOOOOoooooooOOOOOOO"
    puts request.env["omniauth.auth"]
    @user = User.from_omniauth(request.env["omniauth.auth"])
    puts @user

    if @user.persisted?
      puts "we persisted!"
      sign_in_and_redirect @user, :event => :authentication
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      puts "we are being sent to sign up"
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
    if @user.nil?
      "BOOOOOOO something went wrong :( BOOOOOO"
      failure
    end
  end

  def failure
    redirect_to root_path
  end
end
