import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import Navigation from '../navigation/navigation.js';

const Header = ({ totalItems, totalCost }) => {
  return (
    <header className="header">
      <div className="header__nav">
        <Link to="/" className="link">
          <h1 className="header__logo">Super Shop</h1>
        </Link>
        <Navigation />
      </div>
      <Link to="/cart" className="link">
        <div className="header__cart">
          <span className="header__cart-title">Корзина</span>
          <span className="header__totals">Всего: {totalItems} шт.</span>
          <span className="header__totals">На сумму: {totalCost} $</span>
        </div>
      </Link>
    </header>
  )
}

export default Header;