ShopifyApp.configure do |config|
  config.application_name = "Shopify Boilerplate"
  config.api_key = Rails.application.credentials.dig(:shopify, :api_key)
  config.secret = Rails.application.credentials.dig(:shopify, :secret)
  config.old_secret = "<old_secret>"
  # Consult this page for more scope options:
  # https://help.shopify.com/en/api/getting-started/authentication/oauth/scopes
  config.scope = "read_orders, read_draft_orders"
  # read_all_orders needs to be requested from the Partner dashboard
  config.embedded_app = true
  config.api_version = "2019-04"
  config.session_repository = Shop
  config.after_authenticate_job = { job: "Shopify::AfterAuthenticateJob", inline: false }
end
