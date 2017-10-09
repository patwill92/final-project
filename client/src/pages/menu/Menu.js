import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import isEmpty from 'lodash/isEmpty'
import Navbar from "../../components/Navbar/Navbar"


import * as actions from '../../actions'
import MenuPage from '../../components/menu/MenuPage';
import MenuNav from '../../components/menu/MenuNav';

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};
class Menu extends Component {
  render() {
    const returnMenu = (menuList, menuType) => {
        return <MenuPage list={menuList} menuType={menuType}/>
    };
    console.log(this.props.menu.main);
    return (
      <div>
        <Navbar/>
        <div className='container mt-3'>
          <div style={style} className="jumbotron pt-3 pb-3 mb-0 rounded-0">
            <h1 className="display-4">Menu</h1>
          </div>
          <Route exact path="/menu"
                render={props => returnMenu(this.props.menu.main, 'main')}/>
          <Route exact path="/menu/desserts"
                render={props => returnMenu(this.props.menu.dessert, 'desserts')}/>
          <Route exact path="/menu/starters"
                render={props => returnMenu(this.props.menu.starter, 'starters')}/>
        </div>
        <MenuNav tab={this.props.menu.tab}/>
        <Route exact path="/menu"
               render={props => returnMenu(this.props.menu.main, 'main')}/>
        <Route exact path="/menu/desserts"
               render={props => returnMenu(this.props.menu.dessert, 'desserts')}/>
        <Route exact path="/menu/starters"
               render={props => returnMenu(this.props.menu.starter, 'starters')}/>
      </div>
    );
  }
}

function mapStateToProps({menu}) {
  return {menu}
}

export default connect(mapStateToProps, actions)(Menu);
