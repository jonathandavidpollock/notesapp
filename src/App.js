import React, { Component } from 'react';
import Login from './components/Login';
// import base from './base.js';

class App extends Component {
  // constructor() {
  //   super();
  // }
  //
  // componentWillMount() {
  //   this.ref = base.syncState();
  // }

  render() {
    return (
      <div>
        <Login/>
      </div>
    )
  }
}

export default App;
