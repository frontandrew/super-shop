import React, { Component } from 'react';
import { connect } from 'react-redux';

import './product.css';

import { productAddedToCart } from '../../actions/actions.js';
import { render } from 'react-dom';

class Product extends Component {

  state = {
    inputValue: 1
  }

  onInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    const { quantity, title } = this.props.activeProduct;

    return (
      <div className="product">
        <div className="product__image"></div>
        <form
          className="product__controls"
          onSubmit={() => { }}>
          <input
            className="product__quantity"
            onChange={(event) => { this.onInputChange(event) }}
            type="number"
            min={1}
            max={quantity}
            defaultValue={this.state.inputValue}
            required />
          <button
            className="product__tocart"
            type="submit" >
            В Корзину
        </button>
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
}

const mapStateToProps = ({ activeProduct }) => {
  return {
    activeProduct
  }
}

export default connect(mapStateToProps, { productAddedToCart })(Product);