Rails.application.routes.draw do

  root 'pages#home'
  get 'erinn_pdf', to: "pages#download_pdf"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
