import React, { Component } from 'react'
import '../styles/css/ImageUpload.css'

export default class ImageUpload extends Component {
  render() {
    let { imgURL } = this.props
    let imagePreview

    if (imgURL) {
      imagePreview = ( <img src={imgURL} alt="preview"/> )
    } else {
      imagePreview = ( <div className="previewText"></div> )
    }

console.log(this.props.imgURL)

    return (
      <section className='upload-image-form'>
        <form
          aria-label='upload image form'
          onSubmit={(e) =>
            this.props.uploadImage(e.target.files)}
        >
          <label className='image-upload-container'>
            { this.props.imgURL === '../styles/icons/picture-upload.svg' ?
              <div>
                <img
                  className='user-icon-pic'
                  src={this.props.imgURL}
                  alt='placeholder'
                >
                </img>
              </div>
            :
              <div>
                <img
                  className='user-chosen-pic'
                  src={this.props.imgURL}
                  alt='placeholder'
                >
                </img>
              </div>
            }
            <input
              className='update-image-btn'
              aria-label='update image button'
              type='file'
              accept='image/*'
              onChange={(e) =>
                this.props.handleImageChange(e)}
            >
            </input>
          </label>
          <div className="imgPreview">
            { imagePreview }
          </div>
        </form>
      </section>
    )
  }
}
