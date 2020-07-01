import React from 'react';

import './items-list.css';

import items from '../../services/items.json';

const ItemsList = ({categoryId}) => {

  const itemsList = items.map(item => {
    const { id, title } = item;

    return (
      <li className="items-list__item"
        key={id}>
          <h3>{title}</h3>          
      </li>
    )
  });

  return (
    <ul className="items-list">
      {itemsList}
    </ul>
  )
}

export default ItemsList;