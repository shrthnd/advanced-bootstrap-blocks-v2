import { registerBlockType } from '@wordpress/blocks';
import './index.scss';

registerBlockType( 'advanced-bootstrap-blocks/core', {
  title: 'Advanced Bootstrap Block Core',
  icon: 'smiley',
  category: 'design',
  edit: () => <div className="abbv2">Advanced Bootstrap Blocks</div>,
  save: () => <div className="abbv2">Advanced Bootstrap Blocks</div>
} );