import React, {Component} from 'react';

class CheckoutQty extends Component {
  render() {
    return (
      <div className="card-body d-flex align-items-center">
        <div className="input-group d-flex flex-row justify-content-center align-items-center">
          <input style={{width: '35px'}} type="text" className={'pl-1 pr-1 text-center'} value={this.props.quantity}/>
          <div className="d-flex flex-column justify-content-between">
            <button style={{height: '15px', width: '25px'}}
                    className="btn p-0 btn-primary btn-sm rounded-0 d-flex flex-column align-items-center justify-content-center">
              <i style={{fontSize: '0.8rem'}} className={'fal fa-chevron-up'}></i>
            </button>
            <button style={{height: '15px', width: '25px'}}
                    className="btn p-0 btn-primary btn-sm rounded-0 d-flex flex-column align-items-center justify-content-center">
              <i style={{fontSize: '0.8rem'}} className={'fal fa-chevron-down'}></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CheckoutQty;
