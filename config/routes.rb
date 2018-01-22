Rails.application.routes.draw do



  get 'pages/about'
  get 'pages/testimonials'
  get 'pages/education'
  get 'pages/experience'


  get 'pages/ideas'

  root 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
