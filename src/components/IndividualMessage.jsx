import React, { Component } from 'react'
import '../styles/css/IndividualMessage.css'

export default class IndividualMessage extends Component {
  render() {
    return (
      <li>
        <div className="date-and-username">
          <span className="created-at">
            { this.props.message.createdAt }
          </span>
          <span className="display-name">
            from { this.props.message.user.displayName }
          </span>
        </div>

        <p className="content">
          { this.props.message.content }
        </p>
      </li>
    )
  }
}
