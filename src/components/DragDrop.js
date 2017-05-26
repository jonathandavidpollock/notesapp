import React, { Component } from 'react';
import upload from '../assets/upload.svg';
import './css/DragDrop.css';

class DragDrop extends Component {
  render() {
    return (
      <div className="upload">
        <p>Drag and Drop</p>
        <img src={upload} alt="cloud icon"/>
      </div>

    )
  }
}

export default DragDrop;
