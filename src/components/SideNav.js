import React, { Component } from 'react';
import PropTypes from 'prop-types';
import doc from '../assets/document.svg';
import pencil from '../assets/pencil.svg';
import setting from '../assets/settings.svg';
import logout from '../assets/Logout.svg';
import './css/SideNav.css';

class SideNav extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const target = e.currentTarget.dataset.target;
    this.context.router.history.push(target);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sideNav" data-target="/Documents" onClick={this.handleClick}>
          <img src={doc} alt="folders"/>
          <p>Documents</p>
        </div>
        <div className="sideNav" data-target="/Editor" onClick={this.handleClick}>
          <img src={pencil} alt="pencil"/>
          <p>Editor</p>
        </div>
        <div className="sideNav" data-target="/Settings" onClick={this.handleClick}>
          <img src={setting} alt="gear icon"/>
          <p>Settings</p>
        </div>
        <div className="sideNav" data-target="/" onClick={this.handleClick}>
          <img src={logout} alt="log out button"/>
          <p>Log Out</p>
        </div>
      </div>
    )
  }
}

SideNav.contextTypes = {
  router: PropTypes.object
}

export default SideNav;
