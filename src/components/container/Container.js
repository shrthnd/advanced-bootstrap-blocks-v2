import { classNames } from '../../utils'

/**
 * Container block
 *
 * @param {Object} props - all component properties
 * @param {string} props.className - custom classNames implemented through registerBlockType.edit
 * @param {string|Object} props.children - nested child elements/components
 */
export const Container = (props) => {
  const { className, children } = props
  return <div className={classNames(['container', className])}>{children}</div>
}

export default Container
