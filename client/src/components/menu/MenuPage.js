import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import MenuList from './MenuList';

class MenuPage extends Component {
  componentDidMount = () => {
    this.props.getMenuTab(this.props.menuType)
  };
  render() {
    return (
      <MenuList
        list={this.props.list}
      />
    );
  }
}

export default connect(null, actions)(MenuPage);
