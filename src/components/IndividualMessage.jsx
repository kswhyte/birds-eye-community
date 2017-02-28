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
          from { message.user.displayName }
        </span>
      </div>

      <p className="content">
        { message.content }
      </p>
    </li>
  )
}

export default IndividualMessage
