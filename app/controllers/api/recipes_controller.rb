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

    def create
        @recipe = Recipe.create!(recipe_params)
        render json: @recipe
    end

    def update
        @recipe = Recipe.find(params[:id])
        @recipe.update!(recipe_params)
        render json: @recipe
    end

    private

    def recipe_params
        params.require(:recipe).permit(:name, :story)
    end
    
end
