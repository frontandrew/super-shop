import React, { Fragment } from 'react';

import './order-list-item.css';

const OrderListItem = ({ item }) => {
  const { title, inCart, total } = item;

  return (
    <Fragment>
      <span className="order-list-item__title">{title}</span>
      <span className="order-list-item__quantity">{inCart}</span>
      <span className="order-list-item__cost">{total}</span>
    </Fragment>
  )
}

export default OrderListItem;