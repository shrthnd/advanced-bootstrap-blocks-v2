import { registerBlockType, getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

import { defaultBlockSettings } from '../../utils'
import Column from './Column'

const BOOTSTRAP_BLOCK_TYPE = 'advanced-bootstrap-blocks/column'
const defaultClassName = getBlockDefaultClassName(BOOTSTRAP_BLOCK_TYPE)

/*
 * Register Bootstrap 4 - Row block
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
