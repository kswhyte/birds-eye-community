import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from '../src/components/App.jsx'
import { assert } from 'chai'

// const sinon = require('sinon')



describe('Unit Test | Application', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<App />)
  })
  it('renders as a <div>', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  })
  it('renders App title', () => {
    const wrapper = shallow(<App />)
    const appTitle = <h2 className="app-title">Bird's Eye Community</h2>

    expect(wrapper.contains(appTitle)).toEqual(true)
  })
})
