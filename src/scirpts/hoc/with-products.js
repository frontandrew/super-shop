import React from 'react';

import { ProductsConsumer } from '../context/context.js';

const withProducts = () => (Wrapped) => {

  return (props) => {
    return (
      <ProductsConsumer>
        {
          (items) => {
            return <Wrapped {...props} products={items} />
          }
        }
      </ProductsConsumer>
    )
  }
}

export default withProducts;