Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:index]
      resources :preferences, only: [:index, :show, :create]
    end
  end


    resources :recipes, only: [:new, :create, :show] do
    end
  end
