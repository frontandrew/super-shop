import React from 'react';
import { Link } from 'react-router-dom';

import './navigation.css'

const Navigation = () => {
  return(
    <ul className="navigation">
      <li className="navigation__item">/ main_page </li>
      <li className="navigation__item">/ category </li>
    </ul>
  )
}

export default Navigation;