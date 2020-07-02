import React from 'react';
import { connect } from 'react-redux';

import './cart.css';

import CartItem from '../cart-item/cart-item.js';

const Cart = ({ cartVisible, totalCost, totalItems }) => {

  if (!cartVisible) {
    return <div />
  } else {
    return (
      <div className="cart">
        <ul className="cart__tabel">
          <CartItem />
        </ul>
        <div className="cart__controls">
          <div className="cart__info">
            <span className="cart__totals">{totalItems}&nbsp;шт.</span>
            <span className="cart__totals">{totalCost}&nbsp;$</span>
          </div>
          <button className="cart__payment">Оплатить</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ totalItems, totalCost, cartVisible }) => {
  return {
    totalCost,
    totalItems,
    cartVisible,
  }
}

export default connect(mapStateToProps)(Cart);