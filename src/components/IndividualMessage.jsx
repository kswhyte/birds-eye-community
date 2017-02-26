import React, { Component } from 'react'

export default class IndividualMessage extends Component {
  constructor() {
    super()
  }
  // if(user.displayName === currentUser){
  //   deleteButton = <span className='delete-message' onClick={()=>deleteMessage(id)}>Delete</span>
  // }

  render(){
    console.log('content', this.props.message);
    return (
      <li>
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
