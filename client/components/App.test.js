import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import App from './App'


test('<App /> adds two numbers', (assert) => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.text(), 'Hello World')

    assert.end()
})