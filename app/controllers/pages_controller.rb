class PagesController < ApplicationController
  def home
  end

  def about
  end

  def education
  end

  def ideas
  end

  def experience
  end

  def testimonials
  end

 def download_pdf
  send_file "#{Rails.root}/public/erinnforzalando.pdf", type: "application/pdf", x_sendfile: true
end

end
