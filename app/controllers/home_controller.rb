# frozen_string_literal: true

class HomeController < AuthenticatedController
  def index
    @orders = ShopifyAPI::Order.find(:all, params: { limit: 250, status: 'any' })
  end
end
