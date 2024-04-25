Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  # get "up" => "rails/health#show", as: :rails_health_check
  root "application#index"
  get "/article/:id", to: "article#show"
  get "/admin/edit/:id", to: "admin#edit"
  get "/admin/publish", to: "admin#publish"
  post "/admin/publish", to: "admin#new"
  # Defines the root path route ("/")
  # root "posts#index"
end
