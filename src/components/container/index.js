import { 
	registerBlockType, 
	getBlockDefaultClassName 
} from '@wordpress/blocks'
import { 
	InnerBlocks 
} from '@wordpress/block-editor'

import { 
	defaultBlockSettings
} from '../../utils'

const BOOTSTRAP_BLOCK_TYPE = 'advanced-bootstrap-blocks/container'
const defaultClassName = getBlockDefaultClassName(BOOTSTRAP_BLOCK_TYPE)

const Container = ( props ) => {
	const { className, children } = props
	return (
		<div className={ ['container', className].join(" ").trim() }>
			{children}
		</div>
	)
}

/*
 * Register Bootstrap 4 - Container block
 */ 
registerBlockType(BOOTSTRAP_BLOCK_TYPE, {
	...defaultBlockSettings({ 
		title: 'BS4 - Container' 
	}), 
	edit: ( { className } ) => (
		<Container className={className}>
			<InnerBlocks />
		</Container>
	),
	save: ( { className } ) => (
		<Container className={className}>
			<InnerBlocks.Content />
		</Container>
	),
})

/*
 * Remove default block className from block className list
 */ 
const setBlockCustomClassName = ( blockName ) => {
	return blockName === defaultClassName ? [] : blockName;
}

wp.hooks.addFilter(
	'blocks.getBlockDefaultClassName',
	`${BOOTSTRAP_BLOCK_TYPE}/set-block-custom-class-name`,
	setBlockCustomClassName
);
