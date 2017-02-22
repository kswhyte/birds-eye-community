import React, { Component } from 'react';
import logo from '../styles/images/logo.png';
import '../styles/css/App.css';
import Dashboard from './Dashboard'
import moment from 'moment'

require('es6-promise').polyfill()
require('isomorphic-fetch')


class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      folderName: '',
    }
  }

  componentDidMount() {
    fetch('/api/messages', {
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      method: 'get'
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        messages: res
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bird's Eye Community</h2>
          <p>{moment().format('MMMM Do YYYY')}</p>
        </div>

        <h1>Message Feed</h1>
        <section className="message-container">
          <div className="message-entry-point"></div>
        </section>
        
        <Dashboard />
      </div>
    );
  }
}

export default App;
