import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import store from './scirpts/store/store.js';

import App from './scirpts/components/app/app.js';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.root')
)