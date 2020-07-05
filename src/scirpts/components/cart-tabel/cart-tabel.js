import React from 'react';
import { connect } from 'react-redux';

import './cart-tabel.css';

import {
  productAddedToCart,
  productRemovedFromCart,
  productDeletedFromCart,
  startPayment,
} from '../../actions/actions.js';
import CartItem from '../cart-item/cart-item.js';

const CartTabel = ({
  totalCost,
  totalItems,
  order,
  cartVisible,
  productAddedToCart,
  productRemovedFromCart,
  productDeletedFromCart,
  startPayment,
}) => {

  if (!cartVisible) {
    return null
  } else {
    const listItems = order.map(item => {
      return (
        <li key={item.id}
          className="cart-item">
          <CartItem
            item={item}
            onAdd={productAddedToCart}
            onRemove={productRemovedFromCart}
            onDelete={productDeletedFromCart} />
        </li>
      )
    })
    return (
      <div className="cart-tabel">
        <ul className="cart-tabel__list">
          {listItems}
        </ul>
        <div className="cart-tabel__controls">
          <div className="cart-tabel__info">
            <span className="cart-tabel__totals">{totalItems}&nbsp;шт.</span>
            <span className="cart-tabel__totals">{totalCost}&nbsp;$</span>
          </div>
          <button
            className="cart-tabel__payment"
            onClick={() => startPayment()} >
            Оплатить
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ totalCost, totalItems, order, cartVisible }) => {
  return { totalCost, totalItems, order, cartVisible }
}

export default connect(
  mapStateToProps,
  {
    productAddedToCart,
    productRemovedFromCart,
    productDeletedFromCart,
    startPayment,
  }
)(CartTabel);
