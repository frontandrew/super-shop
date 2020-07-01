import React from 'react';
import { connect } from 'react-redux';

import './categories-list.css';

import categories from '../../services/categories.json';
import { categorySelect } from '../../actions/actions.js';

const CategoriesList = ({ categorySelect }) => {

  const items = categories.map(item => {
    const { id, title } = item;

    return (
      <li
        className="categories-list__item"
        onClick={() => categorySelect(id)}
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
    categorySelect: (categoryId) => dispatch(categorySelect(categoryId)),
  }
}

export default connect(undefined, mapDispatchToProps)(CategoriesList);