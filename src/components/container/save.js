import Container from './Container'

export const save = ({ className }) => (
  <Container className={className}>
    <InnerBlocks.Content />
  </Container>
)

export default save
