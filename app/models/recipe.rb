class Recipe < ApplicationRecord
    
    has_many :procedures,  dependent: :destroy
    has_many :comments, dependent: :destroy

    validates :name, presence: true

end
