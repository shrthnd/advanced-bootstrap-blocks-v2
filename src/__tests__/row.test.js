import React from 'react'
import { shallow } from 'enzyme'
import { Row } from '../components/row/Row'

describe('Row', () => {
  it('should accept custom className', function () {
    const comparison = shallow(<Row className="align-items-center" />).contains(
      <div className="row align-items-center"></div>
    )
    expect(comparison).toBe(true)
  })

  it('should match snapshot', function () {
    expect(
      shallow(<Row className="align-items-center">Test</Row>)
    ).toMatchSnapshot()
  })
})
