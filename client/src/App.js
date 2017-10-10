import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import io from 'socket.io-client';
import * as actions from './actions';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Menu from './pages/menu/Menu'
import Admin from './pages/admin/Admin'
import Checkout from "./pages/checkout/Checkout";
import Fail from './pages/menu/Fail'
import './App.css';
import axios from 'axios';

const socket = io();

class App extends Component {
  state = {
    socketMsg: '',
    tPrice: 0
  };

  componentDidMount = () => {
    // window.addEventListener("resize", this.props.getWidth);
    // window.addEventListener("scroll", this.props.getScroll);
    socket.on('getOrder', (payload) => {
      console.log(payload);
      this.setState({tPrice: payload.totalPrice});
    });
    socket.emit('message', {msg: 'Hello Socket'});
    socket.on('getMessage', (payload) => {
      this.setState({socketMsg: payload.hello})
    });

    axios.get('/api/orders').then((res) => {
      console.log(res.data);
    });
    this.props.getMainMenu();
    this.props.getStarterMenu();
    this.props.getDessertMenu();
    this.props.getAdminMenu('main');
    this.props.getAdminMenu('starter');
    this.props.getAdminMenu('dessert');
    this.props.getUser();
    this.props.getCart();
  };

  render() {
    return  (
      <Router>
        <div>
          <Navbar/>
          <h1>{this.state.socketMsg}</h1>
          <h1>{this.state.tPrice}</h1>
          <Route exact path="/" component={Home}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/admin" component={Admin}/>
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

