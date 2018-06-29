Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:destroy, :index, :create, :update, :show]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resource :comments, only: [:create, :destroy, :update, :show, :index]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
