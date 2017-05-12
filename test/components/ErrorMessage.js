import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import ErrorMessage from '../../app/components/ErrorMessage'

describe('<ErrorMessage />', () => {

  it('should render component', () => {
    const wrapper = shallow(<ErrorMessage />)
    expect(wrapper.find('article.message.is-danger')).to.have.length(1)
    expect(wrapper.find('div.message-body')).to.have.length(1)
  })

  it('should render component with the correct error message', () => {
    const errorMessage = "Some error message"
    const wrapper = shallow(<ErrorMessage error={errorMessage} />)
    expect(wrapper.find('div.message-body').text()).to.be.equal(errorMessage)
  })

  it('should render component without an error message', () => {
    const wrapper = shallow(<ErrorMessage />)
    expect(wrapper.find('div.message-body').text()).to.be.equal('')
  })

})