import React, { Component } from 'react'

export default class IndividualMessage extends Component {

  render(){
    return (
      <li>
        <span className="created-at">
          {this.props.message.createdAt}
        </span>
        <span className="display-name">
          {this.props.message.user.displayName}
        </span>
        <p className="content">
          {this.props.message.content}
        </p>
      </li>
    )
  }
}
