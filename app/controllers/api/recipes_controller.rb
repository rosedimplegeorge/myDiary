class Api::RecipesController < ApplicationController

    def index
        @recipes = Recipe.all
        render json: @recipes
    end

    def show
        @recipe = Recipe.find(params[:id])
        render json: @recipe
    end

    def destroy
        @recipe = Recipe.find(params[:id]).destroy
        render status: 200
    end

    
end
