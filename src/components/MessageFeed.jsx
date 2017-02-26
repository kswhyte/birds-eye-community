import React, { Component } from 'react'
import logo from '../styles/images/logo.svg'
import '../styles/css/MessageFeed.css'

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
      </div>
    )
  }
}
