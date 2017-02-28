import React from 'react'
import ReactDOM from 'react-dom'
import UserInput from '../src/components/UserInput.jsx'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

const sinon = require('sinon')

describe('Unit Test | UserInput', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<UserInput />)
  })

  it('renders as a <form>', () => {
    const wrapper = shallow(<UserInput />)
    assert.equal(wrapper.type(), 'form')
  })

  it('renders xml elements', () => {
    sinon.spy(UserInput.prototype, 'render')
    const wrapper = mount(<UserInput />)
    assert.equal(UserInput.prototype.render.calledOnce, true)
  })

  it('should have a form element with 1 prop', () => {
    const wrapper = render(<UserInput />)
    assert.equal(wrapper.find('.message-input').length, 1)
  })

  it('should have a button with 1 prop', function(){
    const wrapper = render(<UserInput />)
    assert.equal(wrapper.find('.submit-button').length, 1)
  })
})
