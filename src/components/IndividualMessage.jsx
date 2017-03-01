import React from 'react'
import '../styles/css/IndividualMessage.css'

const IndividualMessage = ({ message, starMessage, deleteMessage, user, currentUser }) => {
    return (
      <li>
        <div className="date-and-username">
          <span className="created-at">
            { message.createdAt }
          </span>
          <span className="display-name">
            from { message.displayName }
          </span>
          <span className='starred' onClick={() => starMessage(message.key, message.starred)}>
            { message.starred ? '⭐️' : '☆'}
          </span>
          { user === currentUser ?
            <span className='delete-message' onClick={() => deleteMessage(message.key)}>
            Delete
            </span>
            :
            null
          }
        </div>

      <p className="content">
        { message.content }
      </p>
    </li>
  )
}

export default IndividualMessage
