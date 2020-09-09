import React from 'react'
import { shallow } from 'enzyme'
import { Row } from '../components/row/Row'

describe('Row', () => {
  it('should accept custom className', function () {
    const html = shallow(<Row className="align-items-center" />)
    const example = <div className="row align-items-center"></div>
    const comparison = html.contains(example)
    expect(comparison).toBe(true)
  })

  it('should match snapshot', function () {
    expect(
      shallow(<Row className="align-items-center">Test</Row>)
    ).toMatchSnapshot()
  })
})
