import React, { Component } from 'react'
import '../styles/css/UserInput.css'

export default class UserInput extends Component {
  constructor() {
    super()
    this.state = {
      draftMessage: '',
    }
  }

  submitMessage(e) {
    e.preventDefault()

      this.props.addNewMessage(this.state.draftMessage)
      this.setState ({
        draftMessage: ''
      })
  }

  addMessage(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      this.submitMessage(e)
    }
  }

  // pushContact(e) {
  //   e.preventDefault()
  //
  //   let newContact = {
  //     notes:    this.state.notes,
  //     followUp: this.state.followUp,
  //     imgKey:   Date.now()
  //   }
  //   return(this.props.createContact(
  //     newContact,
  //     this.state.userImage,
  //     newContact.imgKey,
  //   ),
  //   this.setInitialState()
  //   )
  // }

  render() {
    return (
      <form className="message-input">
        <input
          type='text'
          className='message-input-field'
          placeholder={`Message the ${this.props.channelName} Channel...`}
          value={this.state.draftMessage}
          onChange={(e) => this.setState({ draftMessage: e.target.value })}
        />
        <input
          className='submit-button button'
          type='submit'
          onClick={(e) => this.submitMessage(e)}
          value='Submit'
          onSubmit={(e) => this.addMessage(e)}
        />
      </form>
    )
  }
}
