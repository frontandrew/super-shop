import React from 'react';

import './cart-item.css';

const CartItem = () => {
  return (
    <li className="cart-item">
      <span className="cart-item__name">Товар Х</span>
      <input
        className="cart-item__quantity"
        type="number"
        min={1}
        max={4}
        value={2} />
      <button className="cart-item__delete">X</button>
    </li>
  )
}

export default CartItem;