import React, { Component } from 'react';
import Modal from './Modal';
import hamburger from '../assets/hamburger.svg';
import './css/Header.css';


class EditorHeader extends Component {
  constructor(props) {
    super(props);
    this.modalToggle = this.modalToggle.bind(this);
    this.state = {
      modalOpened: false
    };
  }

  modalToggle () {
    this.setState({ modalOpened: !this.state.modalOpened })
  }

  render() {
    return (
      <nav>
        <div className="menu">
          <img src={hamburger} id="hamburger" alt="menu icon" onClick={()=>this.props.displayNav()}/>
          <h2 className="pageName">{this.props.title}</h2>
        </div>
        <div className="buttons">
          <button onClick={this.modalToggle} className="btnSchedule">Schedule</button>
        </div>
        <Modal state={this.state.modalOpened}/>
      </nav>

    )
  }
}

export default EditorHeader;
