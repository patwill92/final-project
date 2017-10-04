import React, {Component} from 'react';

import MenuItemModal from './MenuItemModal'

class MenuItem extends Component {
  render() {
    let info ={
      name: this.props.name,
      price: this.props.price,
      id: this.props.id,
      quantity: this.props.quantity
    };
    return(
      <div id={this.props.id} className="card pl-0 pr-0 col-12" style={{width: '100%'}}>
        <div className="card-body">
          <h4 className="card-title">{this.props.name}</h4>
          <h6 className="card-subtitle mb-2 text-muted">$ {this.props.price}.00</h6>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur delectus incidunt ipsam magni non repellendus saepe voluptatibus</p>
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <button className="btn btn-sm btn-primary"><i className="fal fa-plus-square mr-1"></i> Lunchbox</button>
            <a data-toggle="modal" data-target={`#${this.props.id}-modal`} className="card-link">qty: {this.props.quantity}</a>
          </div>
        </div>
        <MenuItemModal
          info={info}
        />
      </div>
    )
  }
}

export default MenuItem