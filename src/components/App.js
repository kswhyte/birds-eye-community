import React, { Component } from 'react';
import logo from '../styles/images/logo.png';
import '../styles/css/App.css';
import Dashboard from './Dashboard'
import moment from 'moment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bird's Eye Community</h2>
          <p>{moment().format('MMMM Do YYYY')}</p>
        </div>
        <Dashboard />
      </div>
    );
  }
}

export default App;
