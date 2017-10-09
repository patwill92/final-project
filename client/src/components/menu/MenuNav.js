import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import {connect} from 'react-redux';

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

class MenuNav extends Component {
  render() {
    return (
      <div>
        <ul style={style} className="nav mb-3">
          <li className="nav-item tab-link">
            <Link style={color} to='/menu' className={classNames('nav-link ', {'active': this.props.menu.tab === 'main'})}>Main</Link>
          </li>
          <li style={border} className="nav-item tab-link">
            <Link  style={color} to='/menu/starters' className={classNames('nav-link ', {'active': this.props.menu.tab === 'starters'})}>Appetizers</Link>
          </li>
          <li style={{borderRight: border.borderRight}} className="nav-item tab-link">
            <Link  style={color} to='/menu/desserts' className={classNames('nav-link ', {'active': this.props.menu.tab === 'desserts'})}>Deserts</Link>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps({menu}) {
  return {
    menu
  }
}

export default connect(mapStateToProps)(MenuNav);
