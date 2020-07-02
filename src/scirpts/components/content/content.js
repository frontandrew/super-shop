import React from 'react';
import { connect } from 'react-redux';

import CategoriesList from '../categories-list/categories-list.js';
import ItemsList from '../items-list/items-list.js';
import Product from '../product/product.js';

const Content = ({ view }) => {
  if (view === 'categories') {
    return (
      <CategoriesList />
    )
  } else if (view === 'items') {
    return (
      <ItemsList />
    )
  } else if (view === 'product') {
    return (
      <Product />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Content);

