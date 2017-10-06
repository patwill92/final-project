import React, {Component} from 'react';

import CheckoutCard from '../../components/checkout/CheckoutCard'

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};

class Checkout extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <div style={style} className="jumbotron pt-3 pb-3 mb-0 rounded-0">
          <h1 className="display-4">Checkout</h1>
        </div>
        <CheckoutCard/>
      </div>
    );
  }
}

export default Checkout;
