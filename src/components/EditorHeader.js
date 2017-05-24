import React, { Component } from 'react';
import hamburger from '../assets/hamburger.svg';
import './css/Header.css';


class EditorHeader extends Component {
  render() {
    return (
      <nav>
        <div className="menu">
          <img src={hamburger} id="hamburger" alt="menu icon" />
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

export default EditorHeader;
