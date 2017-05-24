import React, { Component } from 'react';
import './css/Header.css';

class EditorHeader extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.currentTarget
  }
  render() {
    return (
      <nav>
        <div className="menu">
          <img src="../assets/hamburger.svg" alt="menu icon" onClick={this.handleClick}/>
          <h2 className="pageName">{this.props.title}</h2>
        </div>
      </nav>
    )
  }
}

export default EditorHeader;
