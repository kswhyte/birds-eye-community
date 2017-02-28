import React, { Component } from 'react'
import '../styles/css/ImageUpload.css'
import picturePlaceholder from '../styles/icons/picture-upload.png'

export default class ImageUpload extends Component {
  render() {
    let { imgURL } = this.props
    let imagePreview

    if (imgURL !== null) {
      imagePreview = (
        <img
          className='user-icon-pic'
          src={imgURL}
          alt="preview"
        />
      )
    } else {
      imagePreview = (
        <img
          className='placeholder-pic'
          src={picturePlaceholder}
          alt="placeholder"
        />
      )
    }

    return (
      <section className='upload-image-form'>
        <form
          aria-label='upload image form'
          onSubmit={(e) => this.props.uploadImage(e.target.files)}
        >
          <label className='image-upload-container'>
            <div>
              { imagePreview }
            </div>

            <input
              className='update-image-btn'
              aria-label='update image button'
              type='file'
              accept='image/*'
              onChange={(e) =>
                this.props.handleImageChange(e)}
            />
          </label>
        </form>
      </section>
    )
  }
}
