Rails.application.routes.draw do
  namespace :api do
    resources :recipes do
      resources :procedures, :comments
    end
  end
end