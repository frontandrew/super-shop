import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import store from './scirpts/store/store.js';
import { CategoriesProvider } from './scirpts/context/context.js';
import categories from './scirpts/services/categories.json';

import App from './scirpts/components/app/app.js';

ReactDOM.render(
  <Provider store={store}>
    <CategoriesProvider value={categories}>
      <Router>
        <App />
      </Router>
    </CategoriesProvider>
  </Provider>,
  document.querySelector('.root')
)