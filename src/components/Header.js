import React, { Component } from 'react';
import './css/Header.css';


class EditorHeader extends Component {
  render() {
    return (
      <nav>
        <div className="menu">
          <img src="./src/assets/hamburger.svg" alt="menu icon"/>
          <h2 className="pageName">{this.props.title}</h2>
        </div>
      </nav>
    )
  }
}

export default EditorHeader;
