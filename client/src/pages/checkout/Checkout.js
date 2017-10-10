import React, {Component} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import axios from 'axios';

import * as actions from '../../actions';
import CheckoutCard from '../../components/checkout/CheckoutCard'

const socket = io();
const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};

class Checkout extends Component {

  sendOrder = () => {
    axios.post('/api/order', {...this.props.cart}).then((res) => {
      console.log(res.data);
      socket.emit('order', {id: res.data.orderId});
    });
  };

  render() {
    return (
      <div className='container mt-3'>
        <div style={style} className="jumbotron pt-3 pb-3 mb-0 rounded-0">
          <h1 className="display-4">Checkout</h1>
        </div>
        <CheckoutCard/>
        <br/>
        <button onClick={this.sendOrder} className="btn btn-md btn-success rounded-0">Send Order</button>
      </div>
    );
  }
}

function mapStateToProps({cart}) {
  return {
    cart
  }
}

export default connect(mapStateToProps, actions)(Checkout);
