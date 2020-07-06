import React from 'react';
import { connect } from 'react-redux';

import './order-list.css';

import OrderListItem from '../order-list-item/order-list-item.js';

const OrderList = ({ order }) => {

  const items = order.map(item => {
    return (
      <li key={item.id}
        className="order-list-item">
        <OrderListItem item={item} />
      </li>
    )
  })

  return (
    <div className="order-list">
      <ul className="order-list__list">
        {items}
      </ul>
    </div>
  )
}

const mapStateToProps = ({ order }) => {
  return { order }
}

export default connect(mapStateToProps)(OrderList);