import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Container } from "../components/container/Container"

describe('Container', () => {
  it('should accept custom className', function() {
    const comparison = shallow(<Container className="bg-info" />)
      .contains(<div className="container bg-info"></div>)
    expect(comparison).toBe(true)
  })

  it('should match snapshot', function() {
    expect(shallow(<Container className="bg-success">Test</Container>)).toMatchSnapshot()
  })
})