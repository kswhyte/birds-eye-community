import React, { Component } from 'react'
import firebase from '../firebase';

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
        placeholder={`Message ${this.props.channelName}`}
        value={this.state.draftMessage}
        onChange={(e) => this.setState({ draftMessage: e.target.value })}
      />
      <span className = 'user-input-btns'>
      <input
        className='submit-button button'
        type='submit'
        onClick={(e) => this.submitMessage(e)}
        value='Submit'
      />
      </span>
    </form>
    )
  }
}
