import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
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
                <Link className='nav-link' to='/menu'>Menu</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/menu'>{this.props.user}</Link>
              </li>
              <li className="nav-item">
                <form>
                  <button onClick={this.props.logoutUser} type='submit' className='nav-link'>Logout</button>
                </form>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/auth/google'>Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Signup</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
} ;

export default Navbar;