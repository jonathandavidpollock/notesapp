import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import Documents from './components/Documents';
import Editor from './components/Editor';
import Settings from './components/Settings';
import NotFound from './components/NotFound';
import './index.css';



const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Documents"  component={Documents} />
        <Route exact path="/Editor" component={Editor} />
        <Route exact path="/Settings" component={Settings} />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}

render(<Root/>, document.querySelector('#root'));
