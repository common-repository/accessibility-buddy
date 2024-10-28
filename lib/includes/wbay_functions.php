<?php
//Check if WP else Exit
if ( ! defined ( 'ABSPATH' ) ) {
	exit ();
}

/**
 * Functions Used throughout the plugin
 * 
 * Main Webful dailywager Functions
 */


if ( ! function_exists( 'wbay_register_enqueue_styles' ) ) :
    /**
     * Register Scripts
     * Register Styles
     * 
     * To Enque within Shortcodes 
     */
	function wbay_register_enqueue_styles() {
		wp_enqueue_script ('jquery.cookie', WBAY_URL . WBAY_URL_DS . 'assets' . WBAY_URL_DS . 'js' . WBAY_URL_DS . 'js.cookie.min.js' , array(), WBAY_VERSION, 'all', true );		
		wp_enqueue_script ('wbay-acc-ajax-scripts', WBAY_URL . WBAY_URL_DS . 'assets' . WBAY_URL_DS . 'js' . WBAY_URL_DS . 'wbay-ajax-scripts.js' , array(), WBAY_VERSION, 'all', true );
		wp_enqueue_script ('wbay-acc-scripts', WBAY_URL . WBAY_URL_DS . 'assets' . WBAY_URL_DS . 'js' . WBAY_URL_DS . 'wbay-scripts.js' , array(), WBAY_VERSION, 'all', true );		
		wp_enqueue_style ('wbay-acc-style', WBAY_URL . WBAY_URL_DS . 'assets' . WBAY_URL_DS . 'css' .WBAY_URL_DS. 'style.css', array(), WBAY_VERSION, 'all', true );
    }// adding styles and scripts for wordpress admin.

	add_action( 'wp_enqueue_scripts', 'wbay_register_enqueue_styles' );

endif;

if(!function_exists("wbay_return_allowed_tags")):
	function wbay_return_allowed_tags() {
		$allowed_tags = array(
		'div' => array(
			'class' 		  	=> array(),
			'id' 			  	=> array(),
			'style' 		  	=> array(),
			'data-position'   	=> array(),
			'data-alignment'  	=> array(),
			'data-dropdown'   	=> array(),
			'data-auto-focus' 	=> array(),
			'data-reveal' 	  	=> array(),
			'data-abide-error' 	=> array(),
			'data-tab-content' 	=> array(),
		),
		'form' => array(
			'class' => array(),
			'id' => array(),
			'name' => array(),
			'method' => array(),
			'action' => array(),
			'data-async' => array(),
			'data-success-class' => array(),
			'data-abide' => array(),
			'data-print-reply' => array()
		),
		'label' => array(
			'class' => array(),
			'id' => array(),
			'for'	=> array()
		),
		'input' => array(
			'class' => array(),
			'id' => array(),
			'type'	=> array(),
			'name'	=> array(),
			'required' => array(),
			'value'	=> array(),
			'placeholder'	=> array(),
			'checked' => array(),
			'step'	=> array(),
		),
		'textarea' => array(
			'class' => array(),
			'id' => array(),
			'type'	=> array(),
			'name'	=> array(),
			'required' => array(),
			'placeholder'	=> array(),
			'cols'	=> array(),
			'rows' => array()
		),
		'select' => array(
			'class' => array(),
			'id' => array(),
			'name'	=> array(),
			'required' => array(),
			'data-security' => array(),
			'data-placeholder' => array(),
			'data-exclude_type' => array(),
			'data-display_stock' => array(),
			'data-post' => array(),
			'style' => array(),
		),
		'option' => array(
			'value' => array(),
			'selected' => array(),
		),
		'button' => array(
			'class' => array(),
			'id' => array(),
			'for'	=> array(),
			'type' => array(),
			'data-open' => array(),
			'data-close' => array(),
			'data-type' => array(),
			'data-job-id' => array(),
			'data-toggle' => array()
		),
		'fieldset' => array(
			'class' => array(),
		),
		'legend' => array(
			'class' => array(),
		),
		'a' => array(
			'class' => array(),
			'id' => array(),
			'href'	=> array(),
			'title'	=> array(),
			'target' => array(),
			'recordid' => array(),
			'data-open' => array(),
			'data-type' => array(),
			'data-value' => array(),
			'style' => array(),
			'dt_brand_device' => array(),
			'dt_brand_id' => array(),
		),
		'table' => array(
			'class' => array(),
			'id' => array(),
			'cellpadding' => array(),
			'cellspacing' => array()
		),
		'thead' => array(
			'class' => array(),
			'id' => array()
		),
		'tbody' => array(
			'class' => array(),
			'id' => array()
		),
		'tr' => array(
			'class' => array(),
			'id' => array()
		),
		'th' => array(
			'class' => array(),
			'id' => array(),
			'colspan' => array(),
			'data-colname' => array()
		),
		'td' => array(
			'class' => array(),
			'id' => array(),
			'align' => array(),
			'colspan' => array(),
			'data-colname' => array()
		),
		'img' => array(
			'class' => array(),
			'id' => array(),
			'src' => array(),
			'alt' => array()
		),
		'h2' => array(
			'class' => array(),
			'id' 	=> array(),
		),
		'ul' => array(
			'class' => array(),
			'id' 	=> array(),
			'data-accordion'	=> array(),
			'data-multi-expand'	=> array(),
			'data-allow-all-closed' => array(),
		),
		'li' => array(
			'class' => array(),
			'id' 	=> array(),
			'data-accordion-item' => array(),
		),
		'h3' => array(
			'class' => array()
		),
		'h4' => array(
			'class' => array()
		),
		'h5' => array(
			'class' => array()
		),
		'h6' => array(
			'class' => array()
		),
		'p' => array(
			'class' => array()
		),
		'b' => array(
			'class' => array(),
			'id' 	=> array(),
		),
		'br' => array(),
		'em' => array(),
		'em' => array(),
		'hr' => array(),
		'small' => array(),
		'strong' => array(),
		'span' => array(
			'class' => array()
		)
	);

		return $allowed_tags;
	}
endif;