import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Document.css';
import Header from './Header';


class Documents extends Component {
  render() {
    return (
      <div>
        <Header title="Documents"/>
        <button className="btnCreateDoc" onClick={this.goToEditPage.bind(this)}>Create Document</button>
        <h2 className="docHeading">All Documents</h2>
        <div className="docList">
          <h3>Title</h3>
          <h3>Privacy</h3>
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
