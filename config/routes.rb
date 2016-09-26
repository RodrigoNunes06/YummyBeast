Rails.application.routes.draw do

  root to: 'users#home'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get '/profile' => 'users#show'
  get '/users' => 'users#index'

  get '/login' => 'sessions#new'
  post '/login' =>  'sessions#create'
  delete '/logout' => 'sessions#destroy'
  
end
