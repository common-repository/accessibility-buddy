<?php
	//Check if WP else Exit
	if ( ! defined( 'ABSPATH' ) ) {
		exit();
	}
	
	/**
	 * Functions file
	 * 
	 * File Includes Main functions
	 */

	require_once WBAY_DIR . "lib" . WBAY_URL_DS . 'activate.php';
	require_once WBAY_DIR . "lib" . WBAY_URL_DS . "includes" . WBAY_URL_DS . 'wbay_functions.php';
	require_once WBAY_DIR . "lib" . WBAY_URL_DS . "includes" . WBAY_URL_DS . 'wbay_accessibility_dashboard.php';
	require_once WBAY_DIR . "lib" . WBAY_URL_DS . "includes" . WBAY_URL_DS . 'wbay_voice_navigation.php';