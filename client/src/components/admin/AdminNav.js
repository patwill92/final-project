import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as actions from '../../actions';
import classNames from 'classnames';

const style = {
  boxShadow: '0px 1px 1px 0px rgba(88, 88, 96, 0.46)'
};

const color = {
  color: 'rgb(33, 37, 41)'
};

const border = {
  borderLeft: '0.5px solid rgba(88, 88, 96, 0.46)',
  borderRight: '0.5px solid rgba(88, 88, 96, 0.46)',
};

class AdminNav extends Component {
  render() {
    return (
      <div>
        <ul style={style} className="nav mb-3">
          <li className="nav-item tab-link">
            <Link style={color} to='/admin/menu'
                  className={classNames('nav-link ', {'active': this.props.adminTab.menu})}
            >
              Menu</Link>
          </li>
          <li style={border} className="nav-item tab-link">
            <Link style={color} to='/admin/edit-content'
                  className={classNames('nav-link ', {'active': this.props.adminTab.content})}>
              Page Content</Link>
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({user, adminTab}) {
  return {
    user,
    adminTab
  }
}

export default connect(mapStateToProps, actions)(AdminNav);
