import React from 'react'
import { shallow } from 'enzyme'
import Column from './Column'

describe('Column', () => {
  it('should accept custom className', function () {
    const html = shallow(<Column className="col-md-4" />)
    const example = <div className="col col-md-4"></div>
    const comparison = html.contains(example)
    expect(comparison).toBe(true)
  })

  it('should match snapshot', function () {
    expect(
      shallow(<Column className="col-md-4">Test</Column>)
    ).toMatchSnapshot()
  })
})
