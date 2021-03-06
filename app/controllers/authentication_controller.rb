class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  def login
    @user = User.find_by(username: login_params[:username])
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode({id: @user.id})
      render json: {
      user: @user.attributes.except("password_digest"),
      token: token
      }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  def verify
    @user = {
      id: @current_user[:id],
      username: @current_user[:username],
      email: @current_user[:email]
    }

    render json: @user
  end

  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end