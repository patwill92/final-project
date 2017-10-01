import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import classNames from 'classnames';

const style = {
  color: '#fff'
};

const fb = {
  backgroundColor: '#4267B2',
  ...style
};

const gg = {
  backgroundColor: '#DD4B39',
  ...style
};

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error_msg: [],
    success_msg: []
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post('/user/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.error_msg) {
          console.log(res.data.error_msg);
          console.log(_.find(res.data.error_msg, _.matchesProperty('param', 'email')));
          this.setState({error_msg: res.data.error_msg})
        } else {
          window.location.reload();
        }
      })
  };

  render() {
    let checkError = param => {
      if (this.state.error_msg.length > 0) {
        let error = _.find(this.state.error_msg, _.matchesProperty('param', param));
        return error ? error['msg'] : false;
      }
    };
    return (
      <form style={{minHeight: '330px'}} className='d-flex flex-column align-items-center justify-content-between'>
        <div className={classNames('form-group col-10 p-0', {'mb-0': checkError('email')})}>
          <input onChange={this.handleInputChange} name='email' value={this.state.email} type="text"
                 className={classNames('form-control', {'is-invalid': checkError('email')})} id="loginEmail"
                 aria-describedby="emailHelp" placeholder="Email"/>
          <div className="invalid-feedback">
            {checkError('email') && checkError('email')}
          </div>
        </div>
        <div className={classNames('form-group col-10 p-0', {'mb-0': checkError('password')})}>
          <input onChange={this.handleInputChange} name='password' value={this.state.password} type="password"
                 className={classNames('form-control', {'is-invalid': checkError('password')})} id="loginPassword"
                 placeholder="Password"/>
          <div className="invalid-feedback">
            {checkError('password') && checkError('password')}
          </div>
        </div>
        <div className="d-flex col-10 p-0 flex-column mt-3">
          <button type='submit'
                  onClick={this.handleSubmit}
                  className="d-flex flex-row justify-content-start align-items-center mb-3 btn btn-primary"><i
            className='mr-2 far fa-envelope'></i><span>Login with Email</span></button>
          <p className='text-center'>OR</p>
          <a href='/auth/facebook' style={fb}
             className="d-flex flex-row justify-content-start align-items-center mb-3 btn rounded"><i
            className='mr-2 fab fa-facebook'></i><span>Login with Facebook</span></a>
          <a href='/auth/google' style={gg}
             className="d-flex flex-row justify-content-start align-items-center mb-0 btn rounded"><i
            className='mr-2 fab fa-google'></i><span>Login with Google</span></a>
        </div>
      </form>
    )
  }
}

export default LoginForm;

