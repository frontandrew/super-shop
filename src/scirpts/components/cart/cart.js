import React from 'react';
import { connect } from 'react-redux';

import './cart.css';

import{cartToggle}from '../../actions/actions.js';
import CartTabel from '../cart-tabel/cart-tabel.js';

const Cart = ({ totalCost, totalItems, cartToggle }) => {

  return (
    <div className="cart">
      <button type="button"
        className="cart__toggle"
        onClick={() => cartToggle()} >
        <span className="cart__title">Корзина</span>
        <span className="cart__totals">Всего: {totalItems} шт.</span>
        <span className="cart__totals">На сумму: {totalCost} $</span>
      </button>
      <CartTabel />
    </div>
  )
}

const mapStateToProps = ({ totalItems, totalCost, cartVisible }) => {
  return {
    totalCost,
    totalItems,
  }
}

export default connect(mapStateToProps, { cartToggle })(Cart);