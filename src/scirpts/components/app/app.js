import React, { Fragment } from 'react';

import './app.css'

import Header from '../header/header.js';
import Content from '../content/content.js';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Content />
    </Fragment>
  );
}

export default App;