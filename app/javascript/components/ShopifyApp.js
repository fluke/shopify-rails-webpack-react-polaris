import React from "react"
import PropTypes from "prop-types"
import OrderList from "./orders/OrderList"
import {AppProvider, Page} from '@shopify/polaris'

import '@shopify/polaris/styles.css';

class ShopifyApp extends React.Component {
  render () {
    console.log(this.props.orders);
    return (
      <AppProvider>
        <Page>
          <OrderList orders={this.props.orders} />
        </Page>
      </AppProvider>
    );
  }
}

ShopifyApp.propTypes = {
  orders: PropTypes.array
};
export default ShopifyApp
