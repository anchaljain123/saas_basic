import React, { Component } from 'react';
import './App.css';
import './style.scss';
import Contact from './Contact';
import Landingpage from './Landingpage';
import {Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
            <Route exact path={'/'} component={Landingpage}/>
            <Route path={'/contact'} component={Contact}/>
      </div>
    );
  }
}

export default App;
