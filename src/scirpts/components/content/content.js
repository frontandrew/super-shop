import React from 'react';
import { connect } from 'react-redux';

import CategoriesList from '../categories-list/categories-list.js';
import ItemsList from '../items-list/items-list.js';

const Content = ({ view }) => {
  if (view === 'categories') {
    return (
      <CategoriesList />
    )
  } else if (view === 'items') {
    return (
      <ItemsList />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Content);

