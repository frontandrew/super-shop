import React from 'react';

import './app.css'

import Header from '../header/header.js';

const App = () => {
  return (
    <React.Fragment>
      <Header totalItems={13} totalCost={16500} />
    </React.Fragment>
  );
}

export default App;