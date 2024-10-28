<?php
/***
	Plugin Name: Accessibility Buddy	
	Plugin URI: https://www.webfulcreations.com/products_group/wordpress-plugins/
	Description: WordPress Accessibility Buddy Plugin.
	Version: 1.3
	Author: Webful Creations
	Author URI: https://www.webfulcreations.com/
	License: GPLv2 or later.
	License URI: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
	Text Domain: accessibility-buddy
	Domain Path: languages
	Requires at least: 5.0
	Tested up to: 6.4.3
	Requires PHP: 7.4
	@package : 1.0
	//
*/

if ( ! defined( 'ABSPATH' ) ) {
	die;
}

define( 'WBAY_VERSION', '1.3' );
define( 'WBAY_FILE', __FILE__ );
define( 'WBAY_FOLDER', dirname( plugin_basename(__FILE__) ) );
define( 'WBAY_DIR', plugin_dir_path( __FILE__ ) );	
define( 'WBAY_URL', plugins_url( '', __FILE__ ) );
define( 'WBAY_URL_DS', '/');

if( ! function_exists( 'wbay_language_plugin_init' ) ) :
	function wbay_language_plugin_init() {
		load_plugin_textdomain( 'accessibility-buddy', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' ); 
	}
	add_action( 'plugins_loaded', 'wbay_language_plugin_init');
endif;

require_once WBAY_DIR . 'lib' . WBAY_URL_DS . 'enginestarter.php';

add_action('after_setup_theme', 'wbay_remove_admin_bar');

function wbay_remove_admin_bar() {
   if (!current_user_can('administrator') && !is_admin()) {
		show_admin_bar(false);
   }
}