import React from 'react';
import { connect } from 'react-redux';

import './header.css';
import { toMainPage } from '../../actions/actions.js';
import Navigation from '../navigation/navigation.js';
import Cart from '../cart/cart.js';

const Header = ({ totalItems, totalCost, toMainPage }) => {
  return (
    <header className="header">
      <div className="header__nav">
        <h1
          className="header__logo link"
          onClick={() => toMainPage()}>
          Super Shop
        </h1>
        <Navigation />
      </div>
      <div className="header__cart">
        <button className="header__cart-button">
          <span className="header__cart-title">Корзина</span>
          <span className="header__cart-totals">Всего: {totalItems} шт.</span>
          <span className="header__cart-totals">На сумму: {totalCost} $</span>
        </button>
        <Cart />
      </div>
    </header>
  )
}

const mapStateToProps = ({ totalItems, totalCost }) => {
  return {
    totalCost,
    totalItems
  }
}

export default connect(mapStateToProps, { toMainPage })(Header);