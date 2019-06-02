import React from "react"
import PropTypes from "prop-types"
import {Avatar, Card, ResourceList, TextStyle} from '@shopify/polaris'

class OrderList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Card
          title="Orders"
        >
          <ResourceList
            showHeader
            items={this.props.orders}
            renderItem={(item) => {
              const {id, email, total_price, order_status_url} = item;
              const media = <Avatar customer size="medium" name={email} />;

              return (
                <ResourceList.Item id={id} url={order_status_url} media={media}>
                  <h3>
                    <TextStyle variation="strong">{email}</TextStyle>
                  </h3>
                  <div>{total_price}</div>
                </ResourceList.Item>
              );
            }}
          />
        </Card>
      </React.Fragment>
    );
  }
}

OrderList.propTypes = {
  orders: PropTypes.array
};
export default OrderList
