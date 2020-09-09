import React from 'react'
import { classNames } from '../../utils'

/**
 * Column block
 *
 * @param {Object} props - all component properties
 * @param {string} props.className - custom classNames implemented through registerBlockType.edit
 * @param {string|Object} props.children - nested child elements/components
 */
export const Column = (props) => {
  const { className, children } = props
  return <div className={classNames(['col', className])}>{children}</div>
}

export default Column
