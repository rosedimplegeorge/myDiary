class Api::ProceduresController < ApplicationController

    def index
        @procedures = Recipe.find(params[:recipe_id]).procedures
        render json: @procedures
    end

    def show
        @procedure = Procedure.find(params[:id])
        render json: @procedure
    end

    def destroy
        @procedure = Procedure.find(params[:id])
        @procedure.destroy
        render status: 200
    end

    def create
        @recipe = Recipe.find(params[:recipe_id])
        @procedure = Procedure.create!(procedure_params)
        render json: @procedure
    end

    def update
        @recipe = Recipe.find(params[:recipe_id])
        @procedure = Procedure.find(params[:id])
        @procedure.update!(procedure_params)
        render json: @procedure
    end

    private

    def procedure_params
        params.require(:procedure).permit(:title, :description, :photo_url, :recipe_id)
    end

end
