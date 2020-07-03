import React from 'react';
import { connect } from 'react-redux';

import './content.css';

import CategoriesList from '../categories-list/categories-list.js';
import ItemsList from '../items-list/items-list.js';
import Product from '../product/product.js';
import { CategoriesConsumer } from '../../context/context';

const Content = ({ view }) => {

  const content = () => {
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

  return (
    <main className="content">
      {content()}
    </main>
  )
}

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

export default connect(mapStateToProps)(Content);