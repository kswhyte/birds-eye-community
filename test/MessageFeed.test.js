import React from 'react'
import ReactDOM from 'react-dom'
import MessageFeed from '../src/components/MessageFeed.jsx'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

const sinon = require('sinon')

describe('Unit Test | MessageFeed', () => {
  let props = {
    channelName: 'foo',
    fetchMessages: sinon.spy()
  }

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MessageFeed {...props} />, div)
  })

  it('renders as a div element', () => {
    const wrapper = shallow(<MessageFeed {...props} />)
    assert.equal(wrapper.type(), 'div')
  })

  it('renders xml elements', () => {
    sinon.spy(MessageFeed.prototype, 'render')
    const wrapper = shallow(<MessageFeed {...props} />)
    assert.equal(MessageFeed.prototype.render.calledOnce, true)
  })
})
