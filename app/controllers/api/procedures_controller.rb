class Api::ProceduresController < ApplicationController

    def index
        @procedures = Recipe.find(params[:recipe_id]).procedures
        render json: @procedures
    end


end
