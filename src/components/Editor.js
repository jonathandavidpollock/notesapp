import React, { Component } from 'react';
import EditorHeader from './EditorHeader';
import SideNav from './SideNav';
import marked from 'marked';

import './css/Editor.css';


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: false,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class Editor extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.callAPI = this.callAPI.bind(this);
    this.displayNav = this.displayNav.bind(this);
    this.state = {
      queries : [],
      text: '#HelloWorld',
      markdown: '#Hello World',
      bibleverse: []
    };
  }

  displayNav() {

  }

  handleChange(event) {
    const pttrn = /{([^}]*)}/g;
    if (this.input.value.match(pttrn)) {
      let params = this.input.value.match(pttrn);
      let i = 0;
      params.forEach(()=> {
        let query = params[i].substring(1, params[i].length-1);
        console.log(`Matches Found: ${query}`);
        this.callAPI(query);
        i++;
      })
    }
    // RESET THE STATE
    this.setState({ markdown: this.input.value})
  }

  render() {
    return (
      <div className="main">
        <div>
          <EditorHeader title="Editor"/>
          <SideNav />
          <div className="editorWrapper">
            <div className="Editor">
              <span>Editor</span>
                <textarea ref={(input)=>this.input = input} onChange={()=>this.handleChange(event)} value={this.state.markdown}></textarea>
            </div>
            <div className="Live">
              <span>Live</span>
              <div className="display" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // display(e) {
  //   e.preventDefault();
  //   console.log("you submited the form.");
  // }

  callAPI(qry) {
    if(!this.state.queries.qry) {
      let domain = "https://crossorigin.me/http://bible-api.com/";
      let query = qry;
      let url = domain + query;
      console.log(url)

      // Process with Fetch
      let promise = fetch(url);
      promise.then(response => {
        return response.json();
      })
      .then(data=>{
        this.setState({
          bibleverse: data.text,
          queries: qry
        });
        // Replace {} so it doesn't
        console.log(`Verse: ${this.state.bibleverse}`);
        let param = "{" + query + "}";
        let array = this.state.markdown.split(param);
        this.setState({
          markdown: array.join(">" + data.text.trim())
        })
      })
      .catch((error)=> {
        throw error

      })
    }


  }
}

export default Editor;
