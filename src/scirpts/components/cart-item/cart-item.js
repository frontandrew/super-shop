import React, { Fragment, useState, useEffect } from 'react';

import './cart-item.css';

const CartItem = ({ item, onAdd, onRemove, onDelete }) => {

  const { title, quantity, inCart } = item;

  const [value, setValue] = useState({})

  useEffect(() => setValue(inCart));

  const onInputChange = (event) => {
    const diff = event.target.value - value;

    if (diff > 0) {
      onAdd(item, diff)
    } else {
      onRemove(item, diff)
    }
  }

  return (
    <Fragment>
      <h4 className="cart-item__name">{title}</h4>
      <input
        className="cart-item__quantity"
        onChange={(event) => onInputChange(event)}
        type="number"
        min={1}
        max={quantity}
        value={value} />
      <button
        className="cart-item__delete"
        onClick={() => onDelete(item, -inCart)}>
        X
      </button>
    </Fragment>
  )

}

export default CartItem;