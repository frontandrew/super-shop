import React from 'react';

import './categories-list.css';

import categories from '../../services/categories.json';

const CategoriesList = () => {

  const items = categories.map(item => {
    const { id, title } = item;

    return (
      <li className="categories-list__item"
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

export default CategoriesList;