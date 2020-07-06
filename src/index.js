import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import store from './scirpts/store/store.js';
import { CategoriesProvider, ProductsProvider } from './scirpts/context/context.js';
import categories from './scirpts/services/categories.json';
import items from './scirpts/services/items.json';

import App from './scirpts/components/app/app.js';

ReactDOM.render(
  <Provider store={store}>
    <CategoriesProvider value={categories}>
      <ProductsProvider value={items}>
        <Router>
          <App />
        </Router>
      </ProductsProvider>
    </CategoriesProvider>
  </Provider>,
  document.querySelector('.root')
)