import React from 'react';
import { connect } from 'react-redux';

import './categories-list.css';
import { scrollTop } from '../../utils/scroll-top.js';

import categories from '../../services/categories.json';
import { categorySelected } from '../../actions/actions.js';

const CategoriesList = ({ categorySelected }) => {

  const items = categories.map(item => {
    const { id, title } = item;

    return (
      <li
        className="categories-list__item"
        onClick={() => {
          categorySelected(item);
          scrollTop();
        }}
        key={id}>
        <h3>{title}</h3>
      </li>
    )
  });

  return (
    <ul className="categories-list">
      {items}
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    categorySelected: (categoryItem) => dispatch(categorySelected(categoryItem)),
  }
}

export default connect(undefined, mapDispatchToProps)(CategoriesList);