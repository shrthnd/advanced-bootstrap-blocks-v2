<?php
/**
 * Plugin Name:     Advanced Bootstrap Blocks
 * Description:     
 * Version:         2.0.0
 * Author:          Advanced Bootstrap Blocks
 * License:         GPL-3.0
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     advanced-bootstrap-blocks
 *
 * @package         advanced-bootstrap-blocks
 */

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', 'advanced_bootstrap_blocks_load_textdomain' );

function advanced_bootstrap_blocks_load_textdomain() {
	load_plugin_textdomain( 'advanced-bootstrap-blocks', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function advanced_bootstrap_blocks_register_block() {

	// automatically load dependencies and version
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'advanced-bootstrap-blocks-editor',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	wp_register_style(
		'advanced-bootstrap-blocks-editor',
		plugins_url( 'build/index.css', __FILE__ ),
		array( 'wp-edit-blocks' ),
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
	);

	register_block_type( 'advanced-bootstrap-blocks/core', array(
		'editor_style' => 'advanced-bootstrap-blocks-editor',
		'editor_script' => 'advanced-bootstrap-blocks-editor',
	) );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'advanced-bootstrap-blocks', 'advanced-bootstrap-blocks' );
  }

}
add_action( 'init', 'advanced_bootstrap_blocks_register_block' );
