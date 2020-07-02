import React from 'react';
import { connect } from 'react-redux';

import './navigation.css'

import { categorySelected } from '../../actions/actions.js';

const Navigation = ({ activeCategory, activeProduct, categorySelected }) => {

  const category = activeCategory ? `/ ${activeCategory.title}` : undefined;
  const product = activeProduct ? `/ ${activeProduct.title}` : undefined;

  return (
    <ul className="navigation">
      <li
        className="navigation__item link"
        onClick={() => categorySelected(activeCategory)} >
        {category}
      </li>
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

const mapDispatchToProps = (dispatch) => {
  return {
    categorySelected: (item) => dispatch(categorySelected(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);