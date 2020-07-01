import React from 'react';
import { connect } from 'react-redux';

import './header.css';
import { toMainPage } from '../../actions/actions.js';
import Navigation from '../navigation/navigation.js';

const Header = ({ totalItems, totalCost, toMainPage }) => {
  return (
    <header className="header">
      <div className="header__nav">
        <h1
          className="header__logo"
          onClick={() => toMainPage()}>
          Super Shop
        </h1>
        <Navigation />
      </div>
      <button className="header__cart">
        <span className="header__cart-title">Корзина</span>
        <span className="header__cart-totals">Всего: {totalItems} шт.</span>
        <span className="header__cart-totals">На сумму: {totalCost} $</span>
      </button>
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