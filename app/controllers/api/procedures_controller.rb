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

end
