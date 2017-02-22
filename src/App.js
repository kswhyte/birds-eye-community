import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bird's Eye Property</h2>
        </div>

        <h1>Message Feed</h1>
        <section className="message-container">
          <div className="message-entry-point"></div>
        </section>
      </div>
    );
  }
}

export default App;
