import React, { Component } from 'react'
import '../styles/css/MessageFeed.css'
import UserInput from './UserInput'
import Messages from './Messages'

export default class MessageFeed extends Component {
  constructor() {
    super()
    this.state = {
      messages: 'MessageFeed'
    }
  }

  updateTitle(e) {
    this.setState({ title: e })
  }

  render() {
    return (
      <div className="messages">
        <section className="messages-header">
          <h1 className="messages-title">{this.props.channelName}</h1>
        </section>

        <section className="message-container">
          <div className="message-entry-point"></div>
        </section>

        <Messages />

        <UserInput
          channelName={this.props.channelName}
          addNewMessage={this.props.addNewMessage}
        />

      </div>
    )
  }
}
