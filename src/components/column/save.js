import Column from './Column'

export const save = ({ className }) => (
  <Column className={className}>
    <InnerBlocks.Content />
  </Column>
)

export default save
