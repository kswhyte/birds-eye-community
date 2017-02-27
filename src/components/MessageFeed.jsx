import React, { Component } from 'react'
import '../styles/css/MessageFeed.css'
import UserInput from './UserInput'
import Messages from './Messages'

export default class MessageFeed extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  render() {
    return (
      <div className="messages-container">
        <section className="messages-header">
          <h1 className="messages-title">{this.props.channelName}</h1>
        </section>

        <section className="message-container">
          <Messages
            currentUser={this.props.currentUser}
            channelName={this.props.channelName}
            fetchMessages={this.props.fetchMessages.bind(this)}
            messages={this.props.messages}
          />
          <UserInput
            channelName={this.props.channelName}
            addNewMessage={this.props.addNewMessage}
          />
        </section>
      </div>
    )
  }
}
