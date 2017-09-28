import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'

import './App.css';

class App extends Component {
  state = {
    width: window.innerWidth,
    scroll: window.pageYOffset,
    user: false
  };

  setWidth = () => {
    this.setState({width: window.innerWidth});
  };

  setScroll = () => {
    this.setState({scroll: window.pageYOffset});
  };

  componentDidMount = () => {
    this.setWidth();
    this.setScroll();
    window.addEventListener("resize", this.setWidth.bind(this));
    window.addEventListener("scroll", this.setScroll.bind(this));
    axios.get('/api/current_user').then(({data}) => {
      if(data._id) {
        this.setState({user: true})
      }
    })
  };

  logoutUser = (e) => {
    e.preventDefault();
    axios.get('/api/logout').then((res) => {
      if(!res) {
        this.setState({user: false})
      }
    })
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.setWidth.bind(this));
    window.removeEventListener("scroll", this.setScroll.bind(this));
  };

  render() {
    let size = this.state.width;
    let scroll = this.state.scroll;
    let user = this.state.user ? 'Yes' : 'No';

    return (
      <Router>
        <div>
          <Navbar logoutUser={this.logoutUser} user={user}/>
          <Route size={size} scroll={scroll} exact path="/" render={(props) => ( <Home size={size} scroll={scroll}/> )}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/admin" component={Admin}/>
        </div>
      </Router>
    );
  }
}

export default App;
