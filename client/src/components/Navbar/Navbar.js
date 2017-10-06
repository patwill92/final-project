import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AuthModal from '../Authentication/AuthModal'
import LoginForm from '../Authentication/LoginForm'
import SignupForm from '../Authentication/SignupForm'

class Navbar extends Component {
  render() {
    let qty = this.props.cart.totalQty && this.props.cart.totalQty;
    let login = (
      <ul className='navbar-nav ml-auto'>
        <li className="nav-item">
          <Link to='menu' className="nav-link"><i className='fal fa-list-alt mr-1'></i>Menu</Link>
        </li>
        <li className="nav-item">
          <span className="nav-link" data-toggle="modal" data-target="#login">Login</span>
        </li>
        <li className="nav-item">
          <span className="nav-link" data-toggle="modal" data-target="#signup">Signup</span>
        </li>
      </ul>
    );
    let logout = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-2">
          <Link to='menu' className="nav-link"><i className='fal fa-list-alt mr-2'></i>Menu</Link>
        </li>
        <li className="nav-item mr-2 d-flex align-items-center">
          <Link to='checkout' className='d-flex align-items-center shop'>
            <div className={'cart d-flex align-items-center justify-content-center flex-column '}>
              <span style={{color: 'rgba(0, 0, 0, 0.5)'}} className="fal fa-shopping-bag" data-fa-transform='grow-6 up-1'></span>
              <small style={{fontSize: '0.7rem', fontWeight: 500}} className="cart-qty p-0">{qty}</small>
            </div>
            <span style={{color: 'rgba(0, 0, 0, 0.5)'}} className='ml-2 lunch'>Lunchbox</span>
          </Link>
        </li>
        <li className="nav-item">
          <a href='/user/logout' className="nav-link">Logout</a>
        </li>
      </ul>
    );
    const navbarStatus = () => {
      switch (this.props.user) {
        case null:
          return '';
          break;
        case false:
          return login;
          break;
        default:
          return logout
      }
    };
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className='navbar-brand' to='/'>Ghost-<i className="fal fa-truck"></i></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {navbarStatus()}
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

function mapStateToProps({user, cart}) {
  return {user, cart}
}

export default connect(mapStateToProps)(Navbar);