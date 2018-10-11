Rails.application.routes.draw do
  resources :comments
  devise_for :users
  resources :projects do
    get '/comments/:id', to: 'comments#destroy'
    resources :comments
  member do
    delete "delete_upload/:upload_id", action: :delete_upload
  end
end
  get '/page-2', to: 'page2#index', as: 'page2'
  root 'home#index'
end
