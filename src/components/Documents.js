import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import './css/Document.css';
import Header from './Header';


class Documents extends Component {
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
        <Header title="Documents" displayNav={this.displayNav}/>
        <SideNav moveNav={this.state.sidebar}/>
        <button className="btnCreateDoc" onClick={this.goToEditPage.bind(this)}>Create Document</button>
        <h2 className="docHeading">All Documents</h2>
        <div className="docList">
          <h3>Title</h3>
          <h3>Privacy</h3>
        </div>
        <div className="docs">

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

Documents.contextTypes = {
  router: PropTypes.object
}
export default Documents;
