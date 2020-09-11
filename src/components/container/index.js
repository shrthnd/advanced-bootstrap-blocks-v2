import { registerBlockType, getBlockDefaultClassName } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

import { defaultBlockSettings, removeDefaultBlockClassName } from '../../utils'
import edit from './edit'
import save from './save'

const BOOTSTRAP_BLOCK_TYPE = 'advanced-bootstrap-blocks/container'
const defaultClassName = getBlockDefaultClassName(BOOTSTRAP_BLOCK_TYPE)

/**
 * Register Bootstrap 4 - Container block
 *
 * @param {string} BOOTSTRAP_BLOCK_TYPE - Block name
 * @param {Object} Object.settings - Default block settings
 * @param {Function} Object.edit - Block edit function/component accepts className
 * @param {Function} Object.save - Block save function/component accepts className
 */
registerBlockType(BOOTSTRAP_BLOCK_TYPE, {
  ...defaultBlockSettings({
    title: 'BS4 - Container',
  }),
  edit: edit,
  save: save,
})

/**
 * Remove default block className from block className list
 *
 * @param {string} blockName
 */
wp.hooks.addFilter(
  'blocks.getBlockDefaultClassName',
  `${BOOTSTRAP_BLOCK_TYPE}/set-block-custom-class-name`,
  (blockName) => removeDefaultBlockClassName(blockName, defaultClassName)
)
