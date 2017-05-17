import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Login/>
      </div>
    );
  }
}

export default App;
