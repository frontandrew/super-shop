import React from 'react';

import { CategoriesConsumer } from '../context/context.js';

const withCategoties = () => (Wrapped) => {

  return (props) => {
    return (
      <CategoriesConsumer>
        {
          (categories) => {
            return <Wrapped {...props} categories={categories} />
          }
        }
      </CategoriesConsumer>
    )
  }
}

export default withCategoties;