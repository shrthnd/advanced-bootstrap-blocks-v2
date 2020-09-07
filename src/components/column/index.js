import { registerBlockType, getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

import { defaultBlockSettings } from '../../utils'
import Column from './Column'

const BOOTSTRAP_BLOCK_TYPE = 'advanced-bootstrap-blocks/column'
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
    title: 'BS4 - Column',
  }),
  edit: ({ className }) => (
    <Column className={className}>
      <InnerBlocks />
    </Column>
  ),
  save: ({ className }) => (
    <Column className={className}>
      <InnerBlocks.Content />
    </Column>
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
