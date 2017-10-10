import React, {Component} from 'react';
import {connect} from 'react-redux';
import io from 'socket.io-client';

import * as actions from '../../actions';

const socket = io();

class KitchenAdmin extends  Component {
  state = {
    tPrice: 0
  };
  componentDidMount = () => {
    this.props.getAdminTab({
      menu: false,
      content: false,
      kitchen:true
    });

  };
  render () {
    return (
      <h1>{this.state.tPrice}</h1>
    )
  }
}

function mapStateToProps({menu}) {
  return {
    menu
  }
}

export default connect(mapStateToProps, actions)(KitchenAdmin);