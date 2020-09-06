import { registerBlockType } from '@wordpress/blocks'

const config = './config'
import './index.scss'

registerBlockType('advanced-bootstrap-blocks/core', {
	...config,
	edit: () => <div className="container">Advanced Bootstrap Blocks</div>,
	save: () => <div className="container">Advanced Bootstrap Blocks</div>,
})

