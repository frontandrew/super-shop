import React from 'react';
import { connect } from 'react-redux';

import './header.css';
import { toMainPage } from '../../actions/actions.js';
import Navigation from '../navigation/navigation.js';
import Cart from '../cart/cart.js';

const Header = ({ toMainPage }) => {
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
      <Cart />
    </header>
  )
}

export default connect(undefined, { toMainPage })(Header);