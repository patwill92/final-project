import React, {Component} from 'react';

class CheckoutPrice extends Component {
  render() {
    return (
      <div className="card-body d-flex align-items-center flex-row justify-content-center">
        <h5 style={{fontWeight: 400}} className="card-title mb-0 mr-2 ">${this.props.price}.00</h5>
        <button style={{height: '30px'}} className=" ml-2 btn btn-danger btn-sm rounded-0 border-0"><i
          className={'fal fa-trash-alt'}></i></button>
      </div>
    )
  }
}

export default CheckoutPrice;
