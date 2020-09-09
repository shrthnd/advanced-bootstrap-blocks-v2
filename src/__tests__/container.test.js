import React from 'react'
import { shallow } from 'enzyme'
import { Container } from '../components/container/Container'

describe('Container', () => {
  it('should accept custom className', function () {
    const html = shallow(<Container className="bg-info" />)
    const example = <div className="container bg-info"></div>
    const comparison = html.contains(example)
    expect(comparison).toBe(true)
  })

  it('should match snapshot', function () {
    expect(
      shallow(<Container className="bg-success">Test</Container>)
    ).toMatchSnapshot()
  })
})
