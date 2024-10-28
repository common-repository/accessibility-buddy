<?php
defined( 'ABSPATH' ) || exit;

//Installation of plugin starts here.
if ( ! function_exists( 'wbay_install' ) ) :
	function wbay_install () {
		//Installs default values on activation.
		global $wpdb;

		require_once ABSPATH .'wp-admin/includes/upgrade.php';

	}//end of function wc_restaurant_install()
	add_action ('wbay_install', 'wbay_install' );
endif;