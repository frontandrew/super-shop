import React from 'react';
import { connect } from 'react-redux';

import './categories-list.css';

import { scrollTop } from '../../utils/scroll-top.js';
import { categorySelected } from '../../actions/actions.js';

const CategoriesList = ({ categorySelected, categories }) => {

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

export default connect(undefined, { categorySelected })(CategoriesList);