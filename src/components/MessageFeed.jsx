import React, { Component } from 'react'
import logo from '../styles/images/logo.svg'
import '../styles/css/MessageFeed.css'

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
          <h1 className="messages-title">Message Feed</h1>
        </section>

        <section className="message-container">
          <div className="message-entry-point"></div>
        </section>
      </div>
    )
  }
}
