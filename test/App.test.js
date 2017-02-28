import React from 'react'
import { shallow, mount, render } from 'enzyme'
import App from '../src/components/App.jsx'
import { assert } from 'chai'

const sinon = require('sinon')

describe('Unit Test | App', () => {
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

  it('renders xml elements', () => {
    sinon.spy(App.prototype, 'render')
    const wrapper = mount(<App />)
    assert.equal(App.prototype.render.calledOnce, true)
  })

  it('can call componentWillMount', () => {
    sinon.spy(App.prototype, 'componentWillMount')
    const wrapper = mount(<App />)
    assert.equal(App.prototype.componentWillMount.calledOnce, true)
  })

  it('should have an image with 1 prop', () => {
    const wrapper = render(<App />)
    assert.equal(wrapper.find('.app-logo').length, 1)
  })

  it('should have a paragraph element for the Date with 1 prop', () => {
    const wrapper = render(<App />)
    assert.equal(wrapper.find('.current-date').length, 1)
  })
})
