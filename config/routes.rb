Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users do
    resources :crops
  end
  resources :users do
    resources :posts
  end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users, only: :create

  get '/users/:user_id', to: 'posts#create_post'
  resources :posts
end
