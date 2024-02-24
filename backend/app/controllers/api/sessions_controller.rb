module Api
  class SessionsController < ApplicationController
    def create
      session[:user_id] = "1"
      render json: { message: "session created" }
    end

    def show
      user_id = session[:user_id]
      if user_id
        render json: { message: "Session active", user_id: user_id }
      else
        render json: { message: "No active session" }, status: :unauthorized
      end
    end
  end
end
