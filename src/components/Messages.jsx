import React, { Component } from 'react'
import firebase from 'firebase'
import { map, extend } from 'lodash';
import IndividualMessage from './IndividualMessage'

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      channelName: ''
    }
  }

  componentWillMount() {
    firebase.database().ref('channel').on('value', (snapshot) => {
      this.setState({ channelName: snapshot.val().channel})
    })
  }

  shouldComponentUpdate() {
    let response
    this.state.channelName !== this.props.channelName ? response = false : response = true
    this.setState({ channelName: this.props.channelName })
    return response
  }

  componentDidUpdate() {
    firebase.database().ref(this.state.channelName).on('value', (snapshot) => {
      const messages = snapshot.val() || {}
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      })
    })
  }

  render() {
    let messageDisplay
    if(this.state.messages){
      messageDisplay = this.state.messages.map(message => <IndividualMessage message={message} />)
    }

    return (
      <div className="message-list">
        <ul>
          {messageDisplay}
        </ul>
      </div>
    )
  }
}
