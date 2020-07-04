import React, { Component } from 'react';
import { connect } from 'react-redux';

import './product.css';

import { productAddedToCart } from '../../actions/actions.js';

const SubmitButton = ({ rest }) => {

  if (rest) {
    return (
      <button
        className="product__tocart"
        type="submit" >
        В Корзину
      </button>
    )
  } else {
    return (
      <button
        className="product__tocart"
        type="submit"
        disabled >
        Нет в наличии
      </button>
    )
  }
}

class Product extends Component {

  state = {
    inputValue: {},
    rest: {},
  };

  componentDidMount() {
    console.log(this.props);
    this.updateProduct();
  }

  componentDidUpdate(prevProps) {
    if (this.props.order !== prevProps.order) {
      this.updateProduct()
    }
    this.render();
  }

  updateProduct() {
    const { order, activeProduct } = this.props;
    const idx = order.findIndex(item => item.id === activeProduct.id)

    if (idx < 0) {
      this.setState(state => {
        return state = {
          id: activeProduct.id,
          title: activeProduct.title,
          price: activeProduct.price,
          rest: activeProduct.quantity,
          inputValue: 1,
          minValue: 1,
        }
      })
    } else {
      const inputValue = order[idx].rest ? 0 : 1;
      const minValue = order[idx].rest ? 0 : 1;

      this.setState(state => {
        return state = {
          ...order[idx],
          inputValue,
          minValue,
        }
      })
    }
  }

  onSubmited(event) {
    event.preventDefault();
    this.props.productAddedToCart(
      this.props.activeProduct,
      this.state.inputValue
    );
  }

  onInputChange(event) {
    this.setState({
      inputValue: +event.target.value
    })
  }

  render() {
    const { rest, title, price, inputValue, minValue } = this.state;

    return (
      <div className="product">
        <div className="product__image"></div>

        <form
          className="product__controls"
          onSubmit={event => this.onSubmited(event)} >

          <input
            className="product__quantity"
            onChange={event => this.onInputChange(event)}
            type="number"
            min={minValue}
            max={rest}
            value={inputValue}
            required />

          <SubmitButton rest={rest} />
        </form>

        <h4 className="product__title">
          {`${title} Стоимость: ${price} за штуку`}
        </h4>

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

const mapStateToProps = ({ activeProduct, order }) => {
  return {
    activeProduct,
    order
  }
}

export default connect(mapStateToProps, { productAddedToCart })(Product);