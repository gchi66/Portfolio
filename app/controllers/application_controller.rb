class ApplicationController < ActionController::Base
  def default_url_options
    { host: ENV["https://grantchichester.me/"] || "localhost:3000" }
  end
end
