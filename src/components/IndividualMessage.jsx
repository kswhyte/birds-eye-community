import React, { Component } from 'react'
import '../styles/css/IndividualMessage.css'

// const IndividualMessage = ({ message.createdAt, user.displayName, message.content }) => {
export default class IndividualMessage extends Component {
  render() {
    return (
      <li>
        <div className="date-and-username">
          <span className="created-at">
            { this.props.message.createdAt }
          </span>
          <span className="display-name">
            from { this.props.message.displayName }
          </span>
        </div>

        <p className="content">
          { this.props.message.content }
        </p>
      </li>
    )
  }
}

// export default IndividualMessage


// const SignOut = ({ user }) => {
//   return (
//     <div>
//       <button className='sign-out-btn' onClick={() => signOut()}>Sign Out</button>
//     </div>
//   )
// }
//
// export default SignOut
