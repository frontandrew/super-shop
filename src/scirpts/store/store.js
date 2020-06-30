import { createStore } from 'redux';
import reduser from '../redusers/reduser.js';

const store = createStore(reduser);

export default store