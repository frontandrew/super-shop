import React from 'react';
import { connect } from 'react-redux';

import './navigation.css'

const Navigation = ({ activeCategory, activeItem }) => {

  const category = activeCategory ? `/ категория ${activeCategory}` : undefined;
  const item = activeItem ? `/ товар ${activeItem}` : undefined;

  return (
    <ul className="navigation">
      <li className="navigation__item">{category}</li>
      <li className="navigation__item">{item}</li>
    </ul>
  )
}

const mapStateToProps = ({ activeCategory, activeItem }) => {
  return {
    activeCategory,
    activeItem
  }
}

export default connect(mapStateToProps)(Navigation);