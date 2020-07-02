import React from 'react';
import { connect } from 'react-redux';

import './items-list.css';
import { scrollTop } from '../../utils/scroll-top.js';

import items from '../../services/items.json';
import { productSelected } from '../../actions/actions.js';

const ItemsList = ({ activeCategory, productSelected }) => {

  const itemsList = items.map(item => {
    if (item.category_id === activeCategory.id) {

      const { id, title } = item;

      return (
        <li key={id}
          className="items-list__item"
          onClick={() => {
            productSelected(item);
            scrollTop();
          }} >
          <h3>{title}</h3>
        </li>
      );
    }
  });

  return (
    <ul className="items-list">
      {itemsList}
    </ul>
  );
}

const mapStateToProps = ({ activeCategory }) => {
  return {
    activeCategory
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productSelected: (productItem) => dispatch(productSelected(productItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);