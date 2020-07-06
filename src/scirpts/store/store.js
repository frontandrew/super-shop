import { createStore } from 'redux';
import reduser from '../redusers/reduser.js';

const store = createStore(
  reduser,
  // string for redux dev tools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store