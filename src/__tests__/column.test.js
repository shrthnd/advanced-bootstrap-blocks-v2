import React from 'react'
import { shallow } from 'enzyme'
import { Column } from '../components/column/Column'

describe('Column', () => {
  it('should accept custom className', function () {
    const comparison = shallow(<Column className="col-md-4" />).contains(
      <div className="col col-md-4"></div>
    )
    expect(comparison).toBe(true)
  })

  it('should match snapshot', function () {
    expect(
      shallow(<Column className="col-md-4">Test</Column>)
    ).toMatchSnapshot()
  })
})
