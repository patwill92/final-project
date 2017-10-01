import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import MenuPage from '../../components/menu/MenuPage';

const style = {
  boxShadow: '0px 0px 1px 0px rgba(88, 88, 96, 0.46)'
};

class Menu extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <div style={style} className="jumbotron pt-3 pb-3 mb-0 rounded-0">
          <h1 className="display-4">Menu</h1>
        </div>
        <Route exact path="/menu" render={(props) => ( <MenuPage tab='main' list={this.props.menu.main}/> )}/>
        <Route exact path="/menu/desserts"
               render={(props) => ( <MenuPage tab='desserts' list={this.props.menu.dessert}/> )}/>
        <Route exact path="/menu/starters"
               render={(props) => ( <MenuPage tab='starters' list={this.props.menu.starter}/> )}/>
      </div>
    );
  }
}

export default Menu;
