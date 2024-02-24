module Api
  class HelloController < ApplicationController
    def show
      render json: { message: 'hello, world'}
    end
  end
end
