import React, { Component } from 'react';
import './css/Success.css';

class Modal extends Component {
  render() {
    const containerClass = this.props.state ? 'modalWrapper' : 'displayNone';
    return (
      <div className={containerClass} >
        <form>
          <button className="close" data-dismiss="modal">×</button>
          <label htmlFor="date">Date to Publish</label>
          <input type="date" name="date" id="date"/>
          <button type="submit" className="submit">Schedule</button>
        </form>
      </div>
    )
  }
}

export default Modal;
