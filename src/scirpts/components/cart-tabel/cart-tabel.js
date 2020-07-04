import React from 'react';
import { connect } from 'react-redux';

import './cart-tabel.css';

import { cartToggle } from '../../actions/actions.js';
import CartItem from '../cart-item/cart-item.js';

const CartTabel = ({ totalCost, totalItems, order, cartVisible, cartToggle }) => {

  // это компонент cart-table
  if (!cartVisible) {
    return null
  } else {
    return (
      <div className="cart-tabel">
        <ul className="cart-tabel__list">
          <CartItem />
        </ul>
        <div className="cart-tabel__controls">
          <div className="cart-tabel__info">
            <span className="cart-tabel__totals">{totalItems}&nbsp;шт.</span>
            <span className="cart-tabel__totals">{totalCost}&nbsp;$</span>
          </div>
          <button className="cart-tabel__payment">Оплатить</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ totalCost, totalItems, order, cartVisible }) => {
  return { totalCost, totalItems, order, cartVisible }
}

export default connect(mapStateToProps, { cartToggle })(CartTabel);
