import React, { Component } from 'react';
import { render } from 'react-dom';
import './css/Login.css';

class Login extends Component {
  render() {
    return (
      <form className="login">
        <h2 className="loginHeading">Login</h2>
        <div className="loginWrapper">
          <label htmlFor="email" className="loginLabel">Username</label>
          <input type="email" name="email" id="email" required placeholder="joe@gmail.com" className="loginInput"/>
          <label htmlFor="password" className="loginLabel">Password</label>
          <input type="password" name="password" id="password"required className="loginInput"/>
          <button type="submit" className="loginBtn">Login</button>
        </div>
      </form>
    );
  }
}

export default Login;
