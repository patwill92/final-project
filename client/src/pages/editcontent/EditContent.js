import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import isEmpty from 'lodash/isEmpty'
import AdminNavbar from "../../components/AdminNavBar/AdminNavbar"

import MenuPage from '../../components/menu/MenuPage';

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};
class Menu extends Component {
  render() {
    const returnMenu = (menuList, menuType) => {
      if (!isEmpty(menuList))
        return (<MenuPage tab={menuType} list={menuList}/>);
      else
        return (<div/>)
    };
    return (
      <div>
        <AdminNavbar/>
      </div>
    );
  }
}

function mapStateToProps({menu}) {
  return {menu}
}

export default connect(mapStateToProps)(Menu);
