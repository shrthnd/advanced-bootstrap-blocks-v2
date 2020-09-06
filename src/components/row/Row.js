export const Row = (props) => {
  const { className, children } = props
  return <div className={['row', className].join(' ').trim()}>{children}</div>
}

export default Row
