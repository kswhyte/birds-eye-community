import React, { Component } from 'react'
import firebase from 'firebase'

import '../styles/css/reset.css'
import '../styles/css/App.css'

import Dashboard from './Dashboard'
import MessageFeed from './MessageFeed'
import SignIn from './SignIn'
import SignOut from './SignOut'

import moment from 'moment'
import { map, extend } from 'lodash'

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
    firebase.auth().onAuthStateChanged(user => this.setState({ user }))
    this.fetchMessages(this.state.channelName)
  }

  addNewMessage(draftMessage) {
    const { user, channelName } = this.state
    firebase.database().ref(channelName).push({
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      content: draftMessage,
      createdAt: moment().format('MMMM D, h:mm a')
    })
    this.fetchMessages(this.state.channelName)
  }

  updateTitle(e) {
    this.setState({ messages: [] })
    this.setState({ channelName: e })
    firebase.database().ref('channel').set({
        channel: e
    })
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
    let currentUser
    if (user !== null) {
      currentUser = user.displayName
    }

    return (
      <div className="app">
        <div className="app-header">
          <div className="app-logo-container">
            <h2 className="app-title">Bird's Eye Community</h2>
            <p className="current-date">{moment().format('MMMM Do YYYY')}</p>
          </div>
        </div>
          {!this.state.user ?
            <SignIn />
            :
          <div>
            <div className="app-user">
              <p className="welcome-message">Welcome {currentUser}</p>
              <SignOut />
            </div>

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
          }
      </div>
    )
  }
}

export default App
