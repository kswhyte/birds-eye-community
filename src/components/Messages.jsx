import React, { Component } from 'react'
import IndividualMessage from './IndividualMessage'

import '../styles/css/Messages.css'

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      channelName: ''
    }
  }

  render() {
    let messageDisplay
    if (this.props.messages) {
      messageDisplay = this.props.messages.map(message =>
        <IndividualMessage
          key={message.key}
          message={message}
          deleteMessage={this.props.deleteMessage}
          starMessage={this.props.starMessage}
          user={this.props.user}
          currentUser={this.props.currentUser}
        />
      )
    }

    return (
      <div className="message-list">
        <ul>
          { messageDisplay }
        </ul>
      </div>
    )
  }
}
