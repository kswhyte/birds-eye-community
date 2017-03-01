import React, { Component } from 'react'
import firebase from 'firebase'

import UserInput from './UserInput'
import Messages from './Messages'
import ImageUpload from './ImageUpload'
import '../styles/css/MessageFeed.css'
import picturePlaceholder from '../styles/icons/picture-upload.svg'

export default class MessageFeed extends Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      file: '',
      imgPlaceholder: picturePlaceholder,
      imgURL: null
    }
  }

  handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imgURL: reader.result
      })
    }

    reader.readAsDataURL(file)
    this.uploadImage(e.target.files)
  }

  uploadImage(imageUpload) {
    this.setState({
      userImage: imageUpload[0]
    })
  }

  addNewImage(e) {
    e.preventDefault()
    const { imgURL, file, userImage } = this.state
    firebase.storage().ref(`${this.props.channelName} - ${userImage.name}`).put(file)
    this.props.fetchMessages(this.props.channelName)
    // firebase.storage().ref().
  }

  render() {
    return (
      <div className="messages-container">
        <section className="messages-header">
          <h1 className="messages-title">{this.props.channelName.toUpperCase()}</h1>
        </section>

        <section className="message-container">
          <Messages
            currentUser={this.props.currentUser}
            channelName={this.props.channelName}
            fetchMessages={this.props.fetchMessages.bind(this)}
            messages={this.props.messages}
            deleteMessage={this.props.deleteMessage}
            starMessage={this.props.starMessage}
          />
          <div className="input-container">
            <ImageUpload
              uploadImage={this.uploadImage.bind(this)}
              handleImageChange={this.handleImageChange.bind(this)}
              imgURL={this.state.imgURL}
              addNewImage={this.addNewImage.bind(this)}
              fetchMessages={this.props.fetchMessages}
            />
            <UserInput
              channelName={this.props.channelName}
              addNewMessage={this.props.addNewMessage}
            />
          </div>
        </section>
      </div>
    )
  }
}
