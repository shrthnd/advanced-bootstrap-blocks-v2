import React from 'react'
import { classNames } from '../../utils'

/**
 * Row block
 *
 * @param {Object} props - all component properties
 * @param {string} props.className - custom classNames implemented through registerBlockType.edit
 * @param {string|Object} props.children - nested child elements/components
 */
export const Row = (props) => {
  const { className, children } = props
  return <div className={classNames(['row', className])}>{children}</div>
}

export default Row
