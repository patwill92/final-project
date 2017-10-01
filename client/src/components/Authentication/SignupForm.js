import React, {Component} from 'react';
import axios from 'axios';
import classNames from 'classnames';
import _ from 'lodash';

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

class SignupForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    error_msg: [],
    success_msg: []
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  checkErrors = (errors, check) => {
    let myErrors = errors.map(({param}) => {
      return param === check && param;
    });
    return myErrors[0];
  };

  handleFormSubmit = event => {
    event.preventDefault();
    axios.post('/user/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    })
      .then(({data}) => {
        console.log(data.error_msg);
        console.log(_.find(data.error_msg, _.matchesProperty('param', 'email')));
        if (data.error_msg)
          this.setState({error_msg: data.error_msg});
        else
          window.location.reload();
      })
      .catch(err => console.log(err));
  };

  render() {
    let checkError = param => {
      if (this.state.error_msg.length > 0) {
        let error = _.find(this.state.error_msg, _.matchesProperty('param', param));
        return error ? error['msg'] : false;
      }
    };
    return (
      <form style={{minHeight: '450px'}} className='d-flex flex-column align-items-center justify-content-between'>
        <div className={classNames('form-group col-10 p-0', {'mb-0': checkError('name')})}>
          <input onChange={this.handleInputChange} name='name' value={this.state.name} type="text"
                 className={classNames('form-control', {'is-invalid': checkError('name')})} id="signupName"
                 aria-describedby="emailHelp" placeholder="Name"/>
          <div className="invalid-feedback mt-0">
            {checkError('name') && checkError('name')}
          </div>
        </div>
        <div className={classNames('form-group col-10 p-0', {'mb-0': checkError('email')})}>
          <input onChange={this.handleInputChange} name='email' value={this.state.email} type="text"
                 className={classNames('form-control', {'is-invalid': checkError('email')})}
                 id="signupEmail" aria-describedby="emailHelp" placeholder="Email"/>
          <div className="invalid-feedback mt-0">
            {checkError('email') && checkError('email')}
          </div>
        </div>
        <div className={classNames('form-group col-10 p-0', {'mb-0': checkError('password')})}>
          <input onChange={this.handleInputChange} name='password' value={this.state.password} type="password"
                 className={classNames('form-control', {'is-invalid': checkError('password')})} id="signupPassword"
                 placeholder="Password"/>
          <div className="invalid-feedback mt-0">
            {checkError('password') && checkError('password')}
          </div>
        </div>
        <div className={classNames('form-group col-10 p-0', {'mb-0': checkError('password2')})}>
          <input onChange={this.handleInputChange} name='password2' value={this.state.password2} type="password"
                 className={classNames('form-control', {'is-invalid': checkError('password2')})} id="signupPassword2"
                 placeholder="Confirm Password"/>
          <div className="invalid-feedback mt-0">
            {checkError('password2') && checkError('password2')}
          </div>
        </div>
        <div className="d-flex col-10 p-0 flex-column mt-3">
          <button onClick={this.handleFormSubmit} type="submit" className="d-flex flex-row justify-content-start align-items-center mb-3 btn btn-primary"><i className='mr-2 far fa-envelope'></i><span>Continue with Email</span></button>
          <p className='text-center'>OR</p>
          <a href='/auth/facebook' style={fb} className="d-flex flex-row justify-content-start align-items-center mb-3 btn rounded"><i className='mr-2 fab fa-facebook'></i><span>Continue with Facebook</span></a>
          <a href='/auth/google' style={gg} className="d-flex flex-row justify-content-start align-items-center mb-0 btn rounded"><i className='mr-2 fab fa-google'></i><span>Continue with Google</span></a>
        </div>
      </form>
    )
  }
}

export default SignupForm;

