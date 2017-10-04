import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import * as actions from './actions';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Fail from './pages/menu/Fail'

import './App.css';

class App extends Component {

  componentDidMount() {
    // window.addEventListener("resize", this.props.getWidth);
    // window.addEventListener("scroll", this.props.getScroll);
    this.props.getMainMenu();
    this.props.getStarterMenu();
    this.props.getDessertMenu();
    this.props.getUser();
    this.props.getCart();
  };

  // componentWillUnmount = () => {
  //   window.removeEventListener("resize", this.props.getWidth);
  //   window.removeEventListener("scroll", this.props.getScroll);
  // };

  render() {
    let test = this.props.cart ? this.props.cart : null;
    console.log(test);
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route path="/menu" component={Menu}/>
          <Route exact path="/fail" component={Fail}/>
        </div>
      </Router>
    )
  }
}

function mapStateToProps({cart}) {
  return { cart }
}

export default connect(mapStateToProps, actions)(App);

