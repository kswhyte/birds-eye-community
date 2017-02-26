import React, { Component } from 'react'
import firebase from 'firebase'
import { map, extend } from 'lodash';

export default class Messages extends Component {
  constructor() {
    super()
    this.state = {
      messages: '',
      channelName: ''
    }
  }

  componentWillMount() {

    firebase.database().ref('channel').on('value', (snapshot) => {
      this.setState({ channelName: snapshot.val().channel})

      firebase.database().ref(this.state.channelName).on('value', (snapshot) => {
        const messages = snapshot.val() || {}
        this.setState({
          messages: map(messages, (val, key) => extend(val, { key }))
        })
      })
    })
  }

  render() {
    return (
      <div className="message-list">
        <p>{this.props.channelName}</p>
      </div>
    )
  }
}
