import React, { Component } from 'react';
import './css/Header.css';


class Header extends Component {
  render() {
    return (
      <nav>
        <div className="menu">
          <img src="/src/assets/hamburger.svg" alt="menu icon"/>
          <h2 className="pageName">{this.props.title}</h2>
        </div>
        <div className="buttons">
          <button className="btnPublish">Publish</button>
          <button className="btnSchedule">Schedule</button>
        </div>
      </nav>
    )
  }
}

export default Header;
