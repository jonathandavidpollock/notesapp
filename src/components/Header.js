import React, { Component } from 'react';
import hamburger from '../assets/hamburger.svg';
import './css/Header.css';

class EditorHeader extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      sidebar:true
    };
  }
  handleClick(e) {
    // e.currentTarget
    this.setState({
      sidebar: false
    });
  }
  render() {
    return (
      <nav>
        <div className="menu">
          <img src={hamburger} id="hamburger" alt="menu icon" onClick={()=>this.props.displayNav()}/>
          <h2 className="pageName">{this.props.title}</h2>
        </div>
      </nav>
    )
  }
}

export default EditorHeader;
