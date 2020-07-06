import React, { Fragment } from 'react';

import './app.css'

import Header from '../header/header.js';
import Content from '../content/content.js';
import PayModal from '../pay-modal/pay-modal.js';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <PayModal />
    </Fragment>
  );
}

export default App;