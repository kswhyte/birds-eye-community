import React, { Component } from 'react'
import '../styles/css/UserInput.css'

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      draftMessage: '',
    }
  }
  submitMessage(e) {
    e.preventDefault();
    this.props.addNewMessage(this.state.draftMessage)
    this.setState ({
      draftMessage: ''
    })
  }

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
      />
    </form>
    )
  }
}
