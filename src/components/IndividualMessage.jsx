import React, { Component } from 'react'
import '../styles/css/IndividualMessage.css'

const IndividualMessage = ({ message }) => {
    return (
      <li>
        <div className="date-and-username">
          <span className="created-at">
            { message.createdAt }
          </span>
          <span className="display-name">
            from { message.displayName }
          </span>
          <span className='starred' onClick={() => this.props.starMessage(message.key, message.starred)}>
            { message.starred ? '⭐️' : '☆'}
          </span>
          <span className='delete-message' onClick={() => this.props.deleteMessage(message.key)}>
            Delete
          </span>
        </div>

      <p className="content">
        { message.content }
      </p>
    </li>
  )
}

export default IndividualMessage
