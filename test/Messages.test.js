import React from 'react'
import ReactDOM from 'react-dom'
import Messages from '../src/components/Messages.jsx'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

const sinon = require('sinon')

describe('Unit Test | Messages', () => {
  let props = {
    channelName: 'foo',
    fetchMessages: sinon.spy()
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Messages {...props} />, div)
  })

  it('can mount with no properties', () => {
    const wrapper = shallow(<Messages />)
  })

  it('renders as a div element', () => {
    const wrapper = shallow(<Messages />)
    assert.equal(wrapper.type(), 'div')
  })

  it('should have a div element with 1 prop', () => {
    const wrapper = render(<Messages />)
    assert.equal(wrapper.find('.message-list').length, 1)
  })
})
