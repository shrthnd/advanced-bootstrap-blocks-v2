import { Fragment } from 'react'
import { 
  registerBlockType, 
  getBlockDefaultClassName 
} from '@wordpress/blocks'
import {
  InnerBlocks,
  BlockControls
} from '@wordpress/block-editor'
import { Toolbar, ToolbarGroup, ToolbarButton } from '@wordpress/components';
// import { paragraph, formatBold, formatItalic, link } from '@wordpress/icons';
 
import { defaultBlockSettings } from '../../utils'
import Container from './Container'

const BOOTSTRAP_BLOCK_TYPE = 'advanced-bootstrap-blocks/container'
const defaultClassName = getBlockDefaultClassName(BOOTSTRAP_BLOCK_TYPE)

/*
 * Register Bootstrap 4 - Container block
 */
registerBlockType(BOOTSTRAP_BLOCK_TYPE, {
  ...defaultBlockSettings({
    title: 'BS4 - Container'
  }),
  edit: ({ className, setAttributes }) => {

    const toggleClassNameAttribute = ( classToToggle ) => {
      // if container is fluid
      if (className.split(' ').includes(classToToggle)) {
        // split and filter/remove 'container-fluid' from className list 
        // join and return string
        const classNameList = className
          .split(' ')
          .filter(item => { 
            return item.trim() !== classToToggle 
          })
          .join(' ')

        setAttributes({
          className: classNameList
        })
      } else {
        // prepend container-fluid class to className list and trim white-space
        const classNameList = `${classToToggle} ${className}`.trim()
        setAttributes({
          className: classNameList
        })
      }
    }

    return (
      <Fragment>
        <Container className={ className }>
          <InnerBlocks />
        </Container>
        
        <BlockControls>
          <ToolbarGroup>
            <ToolbarButton>
              <label>
                <input 
                  type="checkbox" 
                  checked={ className.split(' ').includes('container-fluid') }
                  onClick={ () => toggleClassNameAttribute('container-fluid') }
                />
                Fluid
              </label>
            </ToolbarButton>
          </ToolbarGroup>
        </BlockControls>
      </Fragment>
    )
  },
  save: ({ className }) => (
    <Container className={className}>
      <InnerBlocks.Content />
    </Container>
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
