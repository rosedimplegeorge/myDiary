class Api::CommentsController < ApplicationController

    def index
        @comments = Recipe.find(params[:recipe_id]).comments
        render json: @comments
    end


end
