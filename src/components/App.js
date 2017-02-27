import React, { Component } from 'react';
import firebase from 'firebase';
import logo from '../styles/images/logo.png';
import '../styles/css/reset.css'
import '../styles/css/App.css';

import Dashboard from './Dashboard'
import MessageFeed from './MessageFeed'
import SignIn from './SignIn'
import SignOut from './SignOut'
import CreateTask from './CreateTask'

import moment from 'moment'
import { pick, map, extend } from 'lodash';

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      user: null,
      channelName: 'Communal'
    }
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
    this.fetchMessages(this.state.channelName)
  }

  addNewMessage(draftMessage) {
    const { user, channelName } = this.state;
    firebase.database().ref(channelName).push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: moment().format('MMMM D, h:mm a')
    });
    this.fetchMessages(this.state.channelName)
  }

  updateTitle(e) {
    this.setState({ messages: [] })
    this.setState({ channelName: e })
    firebase.database().ref('channel').set({
        channel: e
    });
    this.fetchMessages(e)
  }

  fetchMessages(e) {
    this.setState({ messages: [] })
    firebase.database().ref(e).on('value', (snapshot) => {
      const messages = snapshot.val() || {}
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      })
    })
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
          <Dashboard
            updateTitle={this.updateTitle.bind(this)}
          />
          <MessageFeed
            channelName={this.state.channelName}
            addNewMessage={this.addNewMessage.bind(this)}
            fetchMessages={this.fetchMessages.bind(this)}
            messages={this.state.messages}
            currentUser={currentUser}
          />
        </div>
      </div>
    )
  }
}

export default App
