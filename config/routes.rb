Rails.application.routes.draw do
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

  root 'projects#index'


end
