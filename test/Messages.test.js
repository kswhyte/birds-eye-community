import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'

import Messages from '../src/components/Messages.jsx'

const sinon = require('sinon')

describe('Unit Test | Messages', () => {
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
