import React from 'react'
import ReactDOM from 'react-dom'
import ImageUpload from '../src/components/ImageUpload.jsx'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'


const sinon = require('sinon')

describe('Unit Test | ImageUpload', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ImageUpload />, div)
  })

  it('can mount with no properties', () => {
    const wrapper = shallow(<ImageUpload />)
  })

  it('renders as a <section>', () => {
    const wrapper = shallow(<ImageUpload />)
    assert.equal(wrapper.type(), 'section')
  })

  it('renders xml elements', () => {
    sinon.spy(ImageUpload.prototype, 'render')
    const wrapper = mount(<ImageUpload />)
    assert.equal(ImageUpload.prototype.render.calledOnce, true)
  })

  it('should have an input element with 1 prop', () => {
    const wrapper = render(<ImageUpload />)
    assert.equal(wrapper.find('.update-image-btn').length, 1)
  })
})
