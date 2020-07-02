import React from 'react';
import { connect } from 'react-redux';

import './product.css';

const Product = ({ activeProduct }) => {
  const { quantity, title } = activeProduct;

  return (
    <div className="product">
      <div className="product__image"></div>
      <form className="product__controls">
        <input
          className="product__quantity"
          type="number"
          min={1}
          max={quantity}
          defaultValue={1}
          required />
        <button className="product__tocart">В Корзину</button>
      </form>
      <h4 className="product__title">{title}</h4>
      <p className="product__about">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nostrum rerum, dolor error architecto earum tenetur maiores
        eaque facilis, ipsam porro cupiditate magni veritatis. Aut
        culpa, minima similique consectetur laborum accusantium.
        <br /><br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nostrum rerum, dolor error architecto earum tenetur maiores
        eaque facilis, ipsam porro cupiditate magni veritatis. Aut
        culpa, minima similique consectetur laborum accusantium.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nostrum rerum, dolor error architecto earum tenetur maiores
        eaque facilis, ipsam porro cupiditate magni veritatis. Aut
        culpa, minima similique consectetur laborum accusantium.
      </p>
    </div>
  )
}

const mapStateToProps = ({ activeProduct }) => {
  return {
    activeProduct
  }
}

export default connect(mapStateToProps)(Product);