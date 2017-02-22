import React, { Component } from 'react';
import firebase from 'firebase';
import logo from '../styles/images/logo.png';
import '../styles/css/reset.css'
import '../styles/css/App.css';

import Dashboard from './Dashboard'
import MessageFeed from './MessageFeed'
import Login from './Login'
import SignOut from './SignOut'

import moment from 'moment'
import { split } from 'lodash';


require('es6-promise').polyfill()
require('isomorphic-fetch')


class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      folderName: '',
      user: null,
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
      console.error(err)
    })
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    let { user } = this.state
    let currentUser;
    let firstName;
    if (user !== null) {
      currentUser = user.displayName
      firstName = split(user.displayName, ' ')
    }

    return (
      <div className="App">
      {!this.state.user ?
        <Login />
        :
        <div className="app-container">
          <div className="App-header">
            <div className="app-logo-container">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Bird's Eye Community</h2>
              <p>{moment().format('MMMM Do YYYY')}</p>
            </div>
            <div className="app-user">
              <p>Welcome {currentUser}</p>
              <SignOut />
            </div>
          </div>
        </div>
      }
        <div className="main-container">
          <Dashboard />
          <MessageFeed />
        </div>
      </div>
    )
  }
}

export default App
