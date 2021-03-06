import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './css/Login.css';

class Login extends Component {

  // constructor() {
  //   super();
  //   // this.state {
  //   //   uid:null
  //   // };
  // }

  checkLogin(e) {
    e.preventDefault();
    console.log("You changed the URL.");
    // first, grab the text from the inputs
    console.log("Email: " + this.emailInput.value);
    console.log("Password: " + this.passwordInput.value);
    // second, go to new page
    this.context.router.history.push('/Documents');
    // this.context.router.push('/Documents');


  }

  render() {
    // Check if they are not logged in
    // if(!this.state.uid) {
    //   return <div>{this}</div>
    // }
    return (
      <form className="login" onSubmit={this.checkLogin.bind(this)}>
        <h2 className="loginHeading">Login</h2>
        <div className="loginWrapper">
          <label htmlFor="email" className="loginLabel">Username</label>
          <input type="email" name="email" id="email" required placeholder="joe@gmail.com" className="loginInput" ref={(input)=>{this.emailInput = input}} />
          <label htmlFor="password" className="loginLabel">Password</label>
          <input type="password" name="password" id="password"required className="loginInput"  ref={(input)=>{this.passwordInput = input}}/>
          <button type="submit" className="loginBtn">Login</button>
        </div>

      </form>
    )
  }
}

Login.contextTypes = {
  router: PropTypes.object
}

export default Login;
