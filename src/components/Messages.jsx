import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import IndividualMessage from './IndividualMessage'

import '../styles/css/Messages.css'

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      channelName: ''
    }
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({ behavior: 'smooth' });
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
        />
      )
    }

    return (
      <div className="message-list">
        <ul>
          { messageDisplay }
        </ul>
        <div
          style={{float:"left", clear: "both"}}
          ref={(el) => { this.messagesEnd = el }}
        >
        </div>
      </div>
    )
  }
}
