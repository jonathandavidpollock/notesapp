import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SideNav from './SideNav';
import DragDrop from './DragDrop';
import './css/Settings.css';

class Settings extends Component {
  constructor() {
    super();
    this.displayNav = this.displayNav.bind(this);
    this.state = {
      sidebar:false
    };
  }

  displayNav() {
    this.setState({
      sidebar : !this.state.sidebar
    });
  }

  render() {
    return (
      <div>
        <Header title="Settings" displayNav={this.displayNav}/>
        <SideNav moveNav={this.state.sidebar}/>
        <button className="btnCreateDoc" onClick={this.goToEditPage.bind(this)}>Create Document</button>
        <h2 className="settingHeading">All Settings</h2>
        <div className="settingList">
          <div className="settingsWrapper">
            <h3 className="settings">Settings</h3>
            <h4>Email Subscribers</h4>
            <h4>Add Branding</h4>
            <h4>Make Recent Posts Active</h4>
            <p className="description">Your most recent published post will end in /active.</p>
          </div>
          <div className="settingsWrapper">
            <h3 className="settings">Branding</h3>
            <p>
              Your mark is used quite a lot. Typically, we'll show it in place of your name.
              So use a good one, but keep it black and white.
            </p>
          </div>
          <DragDrop />
        </div>
      </div>
    )
  }

  goToEditPage(e) {
    e.preventDefault();
    console.log("You clicked Create Document.")
    this.context.router.history.push('/Editor');
  }
}

Settings.contextTypes = {
  router: PropTypes.object
}

export default Settings;
