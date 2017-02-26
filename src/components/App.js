import React, { Component } from 'react';
import firebase from 'firebase';
import logo from '../styles/images/logo.png';
import '../styles/css/reset.css'
import '../styles/css/App.css';

import Dashboard from './Dashboard'
import MessageFeed from './MessageFeed'
import SignIn from './SignIn'
import SignOut from './SignOut'

import moment from 'moment'
import { pick } from 'lodash';

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      folderName: '',
      user: null,
      channelName: ''
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));

    firebase.database().ref('channel').on('value', (snapshot) => {
      this.setState({ channelName: snapshot.val().channel})
    });
  }

  addNewMessage(draftMessage) {
    const { user, channelName } = this.state;
    firebase.database().ref(channelName).push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMMM D, h:mm a')
    });
  }

  render() {
    let { user } = this.state
    let currentUser;
    if (user !== null) {
      currentUser = user.displayName
    }

    return (
      <div className="App">
      {!this.state.user ?
        <SignIn />
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
          <MessageFeed
            channelName={this.state.channelName}
            addNewMessage={this.addNewMessage.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App
