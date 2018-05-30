class Api::CommentsController < ApplicationController

    def index
        @comments = Recipe.find(params[:recipe_id]).comments
        render json: @comments
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render status: 200
    end

    def create
        @recipe = Recipe.find(params[:recipe_id])
        @comment = Comment.create!(comment_params)
        render json: @comment
    end

    def update
        @recipe = Recipe.find(params[:recipe_id])
        @comment = Comment.find(params[:id])
        @comment.update!(comment_params)
        render json: @comment
    end

    private

    def comment_params
        params.require(:comment).permit(:reviewer_name, :review, :recipe_id)
    end

end
