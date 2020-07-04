import React from 'react';

import './cart-item.css';

const CartItem = ({item}) => {
  const { title, inCart, quantity } = item;

  return (
    <li className="cart-item">
      <h4 className="cart-item__name">{title}</h4>
      <input
        className="cart-item__quantity"
        type="number"
        min={0}
        max={quantity}
        value={inCart} />
      <button className="cart-item__delete">X</button>
    </li>
  )
}

export default CartItem;