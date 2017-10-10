import React, {Component} from 'react';

class CheckoutItem extends Component {
  render() {
    return (
      <div className="card-body d-flex flex-row justify-content-start align-items-center">
        <img style={{width: '80px', height: 'auto'}}
             src={this.props.image} alt="default"
             className={'mr-3'}/>
        <div className="d-flex flex-column justify-content-between align-items-left">
          <h5 className="text-left">{this.props.name}</h5>
          <p className="card-text d-flex flex-column">
            <span><span style={{fontWeight: 500}}>Sides </span> {this.props.sides}</span>
            <span><span style={{fontWeight: 500}}>Comments </span> {this.props.comments}</span>
            <span><span style={{fontWeight: 500}}>Id </span> {this.props.itemId}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default CheckoutItem;
