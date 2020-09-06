import { registerBlockType } from '@wordpress/blocks'
import './index.scss'


const blockSettings = {
	title: 'Advanced Bootstrap Block - Container',
	icon: 'smiley',
	category: 'design',
}

registerBlockType('advanced-bootstrap-blocks/core', {
	...blockSettings,
	edit: () => <div className="container">Advanced Bootstrap Blocks</div>,
	save: () => <div className="container">Advanced Bootstrap Blocks</div>,
})

