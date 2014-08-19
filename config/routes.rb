Rails.application.routes.draw do
  root to: 'root#index'

  namespace :api do
    resources :posts, except: [:new, :edit]
  end

end
