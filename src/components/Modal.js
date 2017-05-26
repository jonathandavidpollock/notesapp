import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Success.css';

class Modal extends Component {
  constructor(){
    super();
    // bind the methods to class
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    // Redirect the user
    console.log("Clicked Submit");
    const target = '/Documents';
    this.context.router.history.push(target);
  }
  render() {
    const containerClass = this.props.state ? 'modalWrapper' : 'displayNone';
    return (
      <div className={containerClass} >
        <form>
          <button className="close" data-dismiss="modal">×</button>
          <label htmlFor="date">Date to Publish</label>
          <input type="date" name="date" id="date"/>
          <button type="submit" onClick={this.handleClick} className="submit">Schedule</button>
        </form>
      </div>
    )
  }
}

// Grab router from context
Modal.contextTypes = {
  router: PropTypes.object
}


export default Modal;
