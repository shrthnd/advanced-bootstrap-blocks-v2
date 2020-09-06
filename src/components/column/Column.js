export const Column = (props) => {
  const { className, children } = props
  return <div className={['col', className].join(' ').trim()}>{children}</div>
}

export default Column
