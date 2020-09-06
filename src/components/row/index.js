import { registerBlockType, getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

import { defaultBlockSettings } from '../../utils'
import Row from './Row'

const BOOTSTRAP_BLOCK_TYPE = 'advanced-bootstrap-blocks/row'
const defaultClassName = getBlockDefaultClassName(BOOTSTRAP_BLOCK_TYPE)

/*
 * Register Bootstrap 4 - Row block
 */
registerBlockType(BOOTSTRAP_BLOCK_TYPE, {
  ...defaultBlockSettings({
    title: 'BS4 - Row',
  }),
  edit: ({ className }) => (
    <Row className={className}>
      <InnerBlocks />
    </Row>
  ),
  save: ({ className }) => (
    <Row className={className}>
      <InnerBlocks.Content />
    </Row>
  ),
})

/*
 * Remove default block className from block className list
 */
const setBlockCustomClassName = (blockName) => {
  return blockName === defaultClassName ? [] : blockName
}
wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  `${BOOTSTRAP_BLOCK_TYPE}/set-block-custom-class-name`,
  setBlockCustomClassName
)
