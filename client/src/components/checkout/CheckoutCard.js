import React, {Component} from 'react';
import {connect} from 'react-redux';

import CheckoutItem from './CheckoutItem'
import CheckoutPrice from './CheckoutPrice'
import CheckoutQty from './CheckoutQty'
import CheckoutPayment from "./CheckoutPayment"


class CheckoutCard extends Component {
  render() {
    let cart = this.props.cart ? this.props.cart.items : false;
    console.log("This is the cart-- " + JSON.stringify(this.props.cart));
    let names, prices, quantities;
    if (cart.length > 0) {
      names = cart.map(item => {
        return (
          <CheckoutItem
            name={item.name}
            sides={`${item.sides.join(', ')}`}
            comments={item.text}
            itemId={item.id}
            key={item.id + '-name-' + item.qty}
          />
        )
      });
      prices = cart.map(item => {
        return (
          <CheckoutPrice
            price={item.price * item.qty}
            itemId={item.id}
            key={item.id + '-price-' + item.qty}
          />
        )
      });
      quantities = cart.map(item => {
        return (
          <CheckoutQty
            quantity={item.qty}
            sides={item.sides}
            comments={item.text}
            itemId={item.id}
            key={item.id + '-qty-' + item.qty}
          />
        )
      });
    }
    return (
      <div>
        <div className={'d-flex flex-row justify-content-between align-items-stretch mt-3'}>
          <div className="card col-8 pl-0 pr-0 rounded-0 border-0">
            <h5 style={{fontWeight: 400}} className="card-header rounded-0">Items</h5>
            {names}
          </div>
          <div className="card col-2 pl-0 pr-0 rounded-0 border-0">
            <h5 style={{fontWeight: 400}} className="card-header rounded-0 text-center middle">Qty</h5>
            {quantities}
          </div>
          <div className="card col-2 pl-0 pr-0 rounded-0 border-0">
            <h5 style={{fontWeight: 400}} className="card-header rounded-0 text-center">Price</h5>
            {prices}
          </div>
        </div>
        <CheckoutPayment
              name={'The Road to learn React'}
              description={'Only the Book'}
              amount={this.props.cart.totalPrice}
            />
      </div>
    )
  }
}

function mapStateToProps({cart}) {
  return {cart}
}

export default connect(mapStateToProps)(CheckoutCard);
