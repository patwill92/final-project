import React, {Component} from 'react'
import Switch from 'react-toggle-switch'
import {connect} from 'react-redux';
import * as actions from '../../actions';

class AdminMenuItem extends Component {
  state = {
    switched: this.props.available
  };

  toggleSwitch = () => {
    this.props.updateMenuItem({
      available: !this.props.available,
      category: this.props.category
    }, this.props.id)
  };

  render() {
    return (
      <li className="media p-3">
        <img style={{width: '80px', height: 'auto'}} className="d-flex mr-3 " src={this.props.image}
             alt="Generic placeholder image"/>
        <div className="media-body">
          <div className='mt-0 mb-1 d-flex flex-row justify-content-between'>
            <div className={'col'}>
              <div className='mt-0 d-flex justify-content-between'>
                <h6 style={{fontWeight: 500}} className='mb-1'>Name</h6>
                <p style={{fontWeight: 400}} className='mb-1 text-muted'>{this.props.name}</p>
              </div>
              <div className='mt-0 d-flex justify-content-between'>
                <h6 style={{fontWeight: 500}} className='mb-1'>Price</h6>
                <p style={{fontWeight: 400}} className='mb-1 text-muted'>${this.props.price}.00</p>
              </div>
              <div className='mt-0'>
                <h6 style={{fontWeight: 500}} className='mb-1'>Description</h6>
                <p style={{fontWeight: 400}} className='mb-1 text-muted'>{this.props.description}</p>
              </div>
            </div>
            <div className="d-flex justify-content-start flex-column align-items-end col">
              <h6 style={{fontWeight: 400}}>Available</h6>
              <Switch onClick={this.toggleSwitch} on={this.props.available}/>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

function mapStateToProps({menu}) {
  return {
    menu
  }
}

export default connect(mapStateToProps, actions)(AdminMenuItem)