import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class CheckoutQty extends Component {
  addOne = (e) => {
    e.preventDefault();
    this.props.editCart(this.props.itemId, {
      qty: this.props.quantity + 1,
      sides: this.props.sides,
      text: this.props.comments
    });
  };
  deleteOne = (e) => {
    e.preventDefault();
    if (this.props.quantity > 0) {
      this.props.editCart(this.props.itemId, {
        qty: this.props.quantity - 1,
        sides: this.props.sides,
        text: this.props.comments
      });
    }
  };

  render() {
    return (
      <div className="card-body d-flex justify-content-center align-items-center">
        <form>
          <div className="input-group d-flex flex-row justify-content-center align-items-center">
            <input name={'qty'} style={{width: '35px'}} type='text' className={'pl-1 pr-1 text-center'}
                   value={this.props.quantity} readOnly/>
            <div className="d-flex flex-column justify-content-between">
              <button onClick={this.addOne} type={'submit'} style={{height: '15px', width: '25px'}}
                      className="btn p-0 btn-primary btn-sm rounded-0 d-flex flex-column align-items-center justify-content-center">
                <i style={{fontSize: '0.8rem'}} className={'fal fa-chevron-up'}></i>
              </button>
              <button onClick={this.deleteOne} type={'submit'} style={{height: '15px', width: '25px'}}
                      className="btn p-0 btn-primary btn-sm rounded-0 d-flex flex-column align-items-center justify-content-center">
                <i style={{fontSize: '0.8rem'}} className={'fal fa-chevron-down'}></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(CheckoutQty);
