import React, { Component } from 'react';
import { connect } from 'react-redux';

import './pay-modal.css';

import { donePayment, closeOrderList } from '../../actions/actions.js';

import OrderList from '../order-list/order-list.js';
import Preloader from '../preloader/preloader.js';

class PayModal extends Component {

  componentDidUpdate(prevProps) {
    const { payment, donePayment } = this.props;

    if (!prevProps.payment && payment === 'progress') {
      let loading = setTimeout(donePayment, 4100);
    }
  }

  render() {
    const { payment, closeOrderList } = this.props;

    const order = payment === 'done' ? <OrderList /> : null;
    const preloader = payment === 'progress' ? <Preloader /> : null;
    const title = payment === 'done' ? 'Оплата прошла успашно!' : 'Процесс оплаты...';

    if (!payment) {
      return null
    } else {
      return (
        <div
          className="pay-modal"
          onClick={() => closeOrderList()} >
          <div className="pay-modal__container">
            <div className="pay-modal__header">
              <span className="pay-modal__title">{title}</span>
              <button className="pay-modal__close">X</button>
            </div>
            {order}
            {preloader}
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ payment, order }) => {
  return {
    payment,
    order
  }
}

export default connect(mapStateToProps, { donePayment, closeOrderList })(PayModal);