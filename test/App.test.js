import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App.jsx'

import { shallow, mount, render } from 'enzyme'
import { assert } from 'chai'


const sinon = require('sinon')

describe('Unit Test | App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('can mount with no properties', () => {
    const wrapper = shallow(<App />)
  })

  it('renders as a <div>', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  })

  it('can call componentWillMount', () => {
    sinon.spy(App.prototype, 'componentWillMount')
    const wrapper = mount(<App />)
    assert.equal(App.prototype.componentWillMount.calledOnce, true)
  })

  it('renders xml elements', () => {
    sinon.spy(App.prototype, 'render')
    const wrapper = mount(<App />)
    assert.equal(App.prototype.render.calledOnce, true)
  })

  it('renders App title', () => {
    const wrapper = shallow(<App />)
    const appTitle = <h2 className="app-title">Bird's Eye Community</h2>
    expect(wrapper.contains(appTitle)).toEqual(true)
  })

  it('should have a paragraph element for the Date with 1 prop', () => {
    const wrapper = render(<App />)
    assert.equal(wrapper.find('.current-date').length, 1)
  })
})
