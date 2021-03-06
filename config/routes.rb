Rails.application.routes.draw do

  root to: 'users#home'

  post '/search' => 'apis#search'

  get '/signup' => 'users#new'
  post '/users' => 'users#create'
  get '/profile' => 'users#show'
  get '/users' => 'users#index'

  get '/login' => 'sessions#new'
  post '/login' =>  'sessions#create'
  delete '/logout' => 'sessions#destroy'
  
end
