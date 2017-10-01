import React, {Component} from 'react';
import _ from 'lodash'
import isEmpty from 'lodash/isEmpty'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Fail from './pages/menu/Fail'

import {getCurrentUser, getMenu} from "./api/api";

import './App.css';

class App extends Component {
  state = {
    width: window.innerWidth,
    scroll: window.pageYOffset,
    authenticated: false,
    user: {},
    menu: {
      main: [],
      dessert: [],
      starter: []
    }
  };

  setWidth = () => {
    this.setState({width: window.innerWidth});
  };

  setScroll = () => {
    this.setState({scroll: window.pageYOffset});
  };

  setUser = (user) => {
    this.setState({
      authenticated: !isEmpty(user),
      user: user
    });
  };

  componentDidMount = async () => {
    this.setWidth();
    this.setScroll();
    window.addEventListener("resize", this.setWidth.bind(this));
    window.addEventListener("scroll", this.setScroll.bind(this));
    let user = await getCurrentUser();
    let menu = await getMenu();
    if (user.data)
      this.setUser(user.data);
    if (menu.data) {
      let categories = {
        main: _.remove(menu.data[0].items, item => item.category === 'Main'),
        dessert: _.remove(menu.data[0].items, item => item.category === 'Dessert'),
        starter: _.remove(menu.data[0].items, item => item.category === 'Starter')
      };
      this.setState({menu: {...categories}});
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.setWidth.bind(this));
    window.removeEventListener("scroll", this.setScroll.bind(this));
  };

  render() {
    let size = this.state.width;
    let scroll = this.state.scroll;
    let user = !isEmpty(this.state.user) && this.state.user;
    return (
      <Router>
        <div>
          <Navbar user={user}/>
          <Route exact path="/" render={(props) => ( <Home size={size} scroll={scroll}/> )}/>
          <Route path="/menu" render={(props) => ( <Menu menu={this.state.menu}/> )}/>
          <Route exact path="/fail" component={Fail}/>
          <Route exact path="/admin" render={() => (
            this.state.authenticated ? (
              <Admin/>
            ) : (
              <Redirect to="/"/>
            )
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
