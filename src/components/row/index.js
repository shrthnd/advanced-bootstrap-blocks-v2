import { registerBlockType, getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

import { defaultBlockSettings } from '../../utils'
import Row from './Row'

const BOOTSTRAP_BLOCK_TYPE = 'advanced-bootstrap-blocks/row'
const defaultClassName = getBlockDefaultClassName(BOOTSTRAP_BLOCK_TYPE)

/**
 * Register Bootstrap 4 - Row block
 *
 * @param {string} BOOTSTRAP_BLOCK_TYPE - Block name
 * @param {Object} Object.settings - Default block settings
 * @param {Function} Object.edit - Block edit function/component accepts className
 * @param {Function} Object.save - Block save function/component accepts className
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

/**
 * Remove default block className from block className list
 *
 * @param {string} blockName
 */
const setBlockCustomClassName = (blockName) => {
  return blockName === defaultClassName ? [] : blockName
}

wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  `${BOOTSTRAP_BLOCK_TYPE}/set-block-custom-class-name`,
  setBlockCustomClassName
)
