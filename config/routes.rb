Rails.application.routes.draw do
  get 'home/index'
  namespace :admin do
    resources :installers

  end
  resources :comments
  devise_for :users
  resources :projects do
    get '/comments/:id', to: 'comments#destroy'
    resources :comments
  member do
    delete "delete_upload/:upload_id", action: :delete_upload
  end
end

  root 'home#index'


end
