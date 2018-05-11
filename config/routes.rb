Rails.application.routes.draw do
  root 'static_pages#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :recipes, only: [:index] do
        resources :preferences, only: [:index, :show, :create]
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :preferences
    end
  end

resources :preferences, only: [:index]

resources :recipes, only: [:index, :new, :create, :show]

  end
