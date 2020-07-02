import React from 'react';
import { connect } from 'react-redux';

import './navigation.css'

const Navigation = ({ activeCategory, activeProduct }) => {

  const category = activeCategory ? `/ ${activeCategory.title}` : undefined;
  const product = activeProduct ? `/ ${activeProduct.title}` : undefined;

  return (
    <ul className="navigation">
      <li className="navigation__item">{category}</li>
      <li className="navigation__item">{product}</li>
    </ul>
  )
}

const mapStateToProps = ({ activeCategory, activeProduct }) => {
  return {
    activeCategory,
    activeProduct
  }
}

export default connect(mapStateToProps)(Navigation);