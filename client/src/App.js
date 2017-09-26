import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Admin from './pages/admin/Admin'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'

import './App.css';

class App extends Component {
  state = {
    width: window.innerWidth,
    scroll: window.pageYOffset
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
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.setWidth.bind(this));
    window.removeEventListener("scroll", this.setScroll.bind(this));
  };

  render() {
    let size = this.state.width;
    let scroll = this.state.scroll;
    return (
      <Router>
        <div>
          <Navbar/>
          <Route size={size} scroll={scroll} exact path="/" render={(props) => ( <Home size={size} scroll={scroll}/> )}/>
          <Route exact path="/menu" component={Menu}/>
          <Route exact path="/admin" component={Admin}/>
        </div>
      </Router>
    );
  }
}

export default App;
