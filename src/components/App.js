import React, { Component } from 'react';
import logo from '../styles/images/logo.svg';
import '../styles/css/App.css';

require('es6-promise').polyfill()
require('isomorphic-fetch')


class App extends Component {
  constructor() {
    super()
    this.state = {
      folders: [],
      folderName: '',
    }
  }

  componentDidMount() {
    fetch('/api/folders', {
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      method: 'get'
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        folders: res
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
