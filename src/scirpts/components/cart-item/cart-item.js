import React, { Component, Fragment } from 'react';

import './cart-item.css';

class CartItem extends Component {
  state = {
    input: {},
  }

  onInputChange(event) {
    const diff = event.target.value - this.state.input;

    if (diff > 0) {
      this.props.onAdd(this.props.item, diff)
      this.setState({
        input: event.target.value,
      })
    } else {
      this.props.onRemove(this.props.item, diff)
      this.setState({
        input: event.target.value,
      })
    }
  }

  componentDidMount() {
    this.setState({
      input: this.props.item.inCart,
    })
  }

  /*   componentDidUpdate(prevProps, prevState) {
      if ( !== this.state.input) {
        const diff = this.state.input - prevState.input;
  
        if (diff > 0) {
          this.props.onAdd(this.props.item, diff)
        }
      }
    } */

  render() {
    const { title, quantity, inCart } = this.props.item;

    return (
      <Fragment>
        <h4 className="cart-item__name">{title}</h4>
        <input
          className="cart-item__quantity"
          onChange={(event) => this.onInputChange(event)}
          type="number"
          min={1}
          max={quantity}
          value={this.state.input} />
        <button
          className="cart-item__delete" 
          onClick={() => this.props.onDelete(this.props.item, -inCart)}>
          X
        </button>
      </Fragment>
    )
  }
}

export default CartItem;