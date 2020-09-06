export const Container = (props) => {
  const { className, children } = props
  return (
    <div className={['container', className].join(' ').trim()}>{children}</div>
  )
}

export default Container
