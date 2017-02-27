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

  componentDidMount() {
    this.props.fetchMessages()
  }

  render() {
    let messageDisplay
    if(this.props.messages){
      messageDisplay = this.props.messages.map(message => <IndividualMessage key={message.key} message={message} />)
    }

    return (
      <div className="message-list">
        <ul>
          {messageDisplay}
        </ul>
      </div>
    )
  }
}
