class Api::CommentsController < ApplicationController

    def index
        @comments = Recipe.find(params[:recipe_id]).comments
        render json: @comments
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

end
