import React from 'react';

import './app.css'

import Header from '../header/header.js';
import Content from '../content/content.js';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Content />
    </React.Fragment>
  );
}

export default App;