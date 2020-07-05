import React, { Component } from 'react';
import { connect } from 'react-redux';

import './pay-modal.css';

class PayModal extends Component {

  render() {
    const { payment } = this.props;

    if (!payment) {
      return null
    } else {
      return (
        <div className="pay-modal">
          <div className="pay-modal__container">
            <div className="pay-modal__header">
              <span className="pay-modal__title">Процесс оплаты</span>
              <button className="pay-modal__close">X</button>
            </div>
            {/*         <Preloader />
        <FinalOrder /> */}
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = ({ payment }) => {
  return {
    payment
  }
}

export default connect(mapStateToProps)(PayModal);