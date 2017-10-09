import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};

class AdminContent extends Component {
  componentDidMount = () => {
    this.props.getAdminTab({
      menu: false,
      content: true
    })
  };
  render() {
    return (
      <div style={style} className="jumbotron pt-3 pb-3 mb-0 rounded-0">
        <h1 className="display-4">Admin Content</h1>
      </div>
    );
  }
}



export default connect(null, actions)(AdminContent);
