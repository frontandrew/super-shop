import React from 'react';

import './product.css';

const Product = () => {
  return (
    <div className="product">
      <div className="product__image"></div>
      <form className="product__controls">
        <input
          className="product__quantity"
          type="number" 
          min={1}
          max={10}
          defaultValue={1}
          required/>
        <button className="product__tocart">В Корзину</button>
      </form>
      <h4 className="product__title">Название</h4>
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

export default Product;