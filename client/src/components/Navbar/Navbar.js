import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import AuthModal from '../Authentication/AuthModal'
import LoginForm from '../Authentication/LoginForm'
import SignupForm from '../Authentication/SignupForm'

class Navbar extends Component {
  render() {
    let login = (
      <ul className='navbar-nav ml-0'>
        <li className="nav-item">
          <a className="nav-link" data-toggle="modal" data-target="#login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="modal" data-target="#signup">Signup</a>
        </li>
      </ul>
    );
    let logout = (
      <ul className="navbar-nav ml-0">
        <li className="nav-item">
          <a className="nav-link">
            <span className="fa-layers">
              <i className="fal fa-shopping-bag" data-fa-transform='grow-8 up-1'></i>
              <span style={{fontWeight: 500}} className="fa-layers-text" data-fa-transform="shrink-5 down-2">0</span>
            </span>
            <span className='ml-3'>Lunchbox</span>
            </a>
        </li>
        <li className="nav-item">
          <a href='/user/logout' className="nav-link">Logout</a>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className='navbar-brand' to='/'>Ghost-<i className="fal fa-truck"></i></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to='menu' className="nav-link"><i className='fal fa-list-alt mr-1'></i>Menu</Link>
              </li>
            </ul>
            {this.props.user ? logout : login}
          </div>
        </div>
        <AuthModal
          id='login'
          title='Sign In'
        >
          <LoginForm/>
        </AuthModal>
        <AuthModal
          id='signup'
          title='Sign Up'
        >
          <SignupForm/>
        </AuthModal>
      </nav>
    );
  }
}

export default Navbar;