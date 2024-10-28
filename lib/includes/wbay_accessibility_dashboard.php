<?php
//Check if WP else Exit
if ( ! defined( 'ABSPATH' ) ) {
    exit();
}

if( ! function_exists( 'wbay_custom_content_after_body_open_tag' ) ) :

    function wbay_custom_content_after_body_open_tag() {

        ?>
        <div class="accessibility-button-wrap">
            <button id="AccessibilityButtonWrp" role="button" class="accessibility-button" type="button" style="cursor: pointer; position: fixed; bottom: 3vh; z-index: 99999999999999999; left: 2vh;">
                <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/body_wh.png' ); ?>" alt="accessibility button" style="background-color: #2d68ff; width: 57px; height: 57px; border-radius: 100%; border: 2px solid #2d68ff; object-fit: contain;" />
                <img class="check-img-hide" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/check_on.svg' ); ?>" alt="Check" style=" position: absolute; right: 0; top: 0; width: 18px;" />
            </button>
        </div>

        <div id="WbAyAccessibilityWrap" class="wbay-acc-accessibility-wrap wbay-acc-accessibility-wrap-hide">

            <div class="wbay-acc-accessibility-wrap-hed">
                <h2><?php echo esc_html__(" Accessibility Dashboard", "accessibility-buddy"); ?></h2>                   
                <button id="wbAyCloseButton" role="button" class="wbay-acc-close-button" type="button">
                    <img class="wbay-acc-close-icon" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/close-icon.svg' ); ?>" />
                </button>
            </div>
            <div class="wbay-acc-accessibility-wrap-body-massage wbay-acc-body-massage-hide">
                <?php echo esc_html__("Accessibility settings have been reset ", "accessibility-buddy"); ?> 
                <img class="wbay-acc-massage-icon" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/check_active.svg' ); ?>" />
            </div>

            <div class="wbay-acc-accessibility-wrap-body-wrap">

                <div class="wbay-acc-accessibility-wrap-body">

                    <button id="WbAyBtnResetWidget" class="wbay_acc_btn_reset_widget" data_wbay_acc_reader_content="Reset all accessibility enhancements">
                        <?php echo esc_html__("Reset All Accessibility Settings ", "accessibility-buddy"); ?>
                        <img class="wbay_acc_btn_reset_widget_icon" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/reset_widget_img.svg' ); ?>" />
                    </button>
                    
                    <div class="wbay-acc-features-wrap">
                        
                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-contrast" data_wbay_acc_reader_content="contrast">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-contrast-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/contrast-icon.png' ); ?>" />
                                    </span>
                                    <span class="icon wbay-acc-contrast-2 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/invert-colors.png' ); ?>" />
                                    </span>
                                    <span class="icon wbay-acc-contrast-3 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/dark-contrast.png' ); ?>" />
                                    </span>
                                    <span class="icon wbay-acc-contrast-4 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/light-contrast.png' ); ?>" />
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-contrast-1"><?php echo esc_html__("Contrast +", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-contrast-2 wbay-acc-d-none"><?php echo esc_html__("Invert Colors", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-contrast-3 wbay-acc-d-none"><?php echo esc_html__("Dark Contrast", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-contrast-4 wbay-acc-d-none"><?php echo esc_html__("Light Contrast", "accessibility-buddy"); ?></span>
                            </button>
                        </div> <!-- wbay-acc-features_item -->
                        
                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-letter-spacing" data_wbay_acc_reader_content="letter spacing">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-spacing-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/icon-spacing.png' ); ?>" />                      
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name"><?php echo esc_html__("Text Spacing", "accessibility-buddy"); ?></span>
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-highlight-links" data_wbay_acc_reader_content="highlight links">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-highlight-links-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/highlight_links_icon.png' ); ?>" />                      
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name"><?php echo esc_html__("Highlight Links", "accessibility-buddy"); ?></span>                            
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-bigger-text" data_wbay_acc_reader_content="Bigger Text">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>                                
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-bigger-text-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/bigger_text_icon.png' ); ?>" />                      
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name"><?php echo esc_html__("Bigger Text", "accessibility-buddy"); ?></span>                                                                                    
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-pause-animations" data_wbay_acc_reader_content="pause animations">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>                              
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-pause-animations-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/pause_animations_icon.png' ); ?>" />                      
                                    </span>
                                    <span class="icon wbay-acc-icon-pause-animations-2 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/play_animations_icon.png' ); ?>" />                      
                                    </span>                                                        
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-pause-animations-1"><?php echo esc_html__("Pause Animations", "accessibility-buddy"); ?></span>                            
                                <span class="wbay-acc-features_item_name wbay-acc-name-pause-animations-2 wbay-acc-d-none"><?php echo esc_html__("Play Animations", "accessibility-buddy"); ?></span>                                                            
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-hide-images" data_wbay_acc_reader_content="hide images">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-hide-images-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/hide_images_icon.png' ); ?>" />
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-hide-images-1"><?php echo esc_html__("Hide Images", "accessibility-buddy"); ?></span>
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-dyslexia-friendly" data_wbay_acc_reader_content="fyslexia friendly">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-dyslexia-friendly-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/dyslexia_friendly_icon01.svg' ); ?>" />                      
                                    </span>
                                    <span class="icon wbay-acc-icon-dyslexia-friendly-2 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/dyslexia_friendly_icon02.svg' ); ?>" />                      
                                    </span>                                                        
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-dyslexia-friendly-1"><?php echo esc_html__("Dyslexia Friendly", "accessibility-buddy"); ?></span>                            
                                <span class="wbay-acc-features_item_name wbay-acc-name-dyslexia-friendly-2 wbay-acc-d-none"><?php echo esc_html__("Legible Fonts", "accessibility-buddy"); ?></span>                                                            
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-enhanced-cursor" data_wbay_acc_reader_content="enhanced cursor">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-enhanced-cursor-1 ">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/cursor-icon.png' ); ?>" />                      
                                    </span>
                                    <span class="icon wbay-acc-icon-enhanced-cursor-2 wbay-acc-d-none ">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/cursor-icon-02.svg' ); ?>" />                      
                                    </span>

                                    <span class="icon wbay-acc-icon-enhanced-cursor-3 wbay-acc-d-none ">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/cursor-icon-03.svg' ); ?>" />                      
                                    </span>                            
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-enhanced-cursor-1"><?php echo esc_html__("Cursor", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-enhanced-cursor-01 wbay-acc-d-none"><?php echo esc_html__("Big Cursor", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-enhanced-cursor-2 wbay-acc-d-none"><?php echo esc_html__("Reading Mask", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-enhanced-cursor-3 wbay-acc-d-none"><?php echo esc_html__("Reading Guide", "accessibility-buddy"); ?></span>
                            </button>
                        </div> <!-- wbay-acc-features_item -->
                        
                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-tooltips" data_wbay_acc_reader_content="tooltips">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-tooltips-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/tooltips_icon.png' ); ?>" />                      
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name"><?php echo esc_html__("Tooltips", "accessibility-buddy"); ?></span>                                                                                        
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-line-height" data_wbay_acc_reader_content="line height">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>                              
                                    <span class="wbay-acc-features-step"></span>                              
                                    <span class="wbay-acc-features-step"></span>                              
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-line-height-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/line_height_icon.png' ); ?>" />                      
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-line-height-0"><?php echo esc_html__("Line Height", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-line-height-1 wbay-acc-d-none"><?php echo esc_html__("Line Height(1.5x)", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-line-height-2 wbay-acc-d-none"><?php echo esc_html__("Line Height(1.75x)", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-line-height-3 wbay-acc-d-none"><?php echo esc_html__("Line Height(2x)", "accessibility-buddy"); ?></span>                                                                                
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-text-align" data_wbay_acc_reader_content="text align">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>                              
                                    <span class="wbay-acc-features-step"></span>                              
                                    <span class="wbay-acc-features-step"></span>                              
                                    <span class="wbay-acc-features-step"></span>                              
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-wbay-acc-text-align-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/text_align_icon.svg' ); ?>" />                      
                                    </span>
                                    <span class="icon wbay-acc-icon-wbay-acc-text-align-2 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/align_right_icon.svg' ); ?>" />                      
                                    </span>
                                    <span class="icon wbay-acc-icon-wbay-acc-text-align-3 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/text_center_icon.svg' ); ?>" />                      
                                    </span>
                                    <span class="icon wbay-acc-icon-wbay-acc-text-align-4 wbay-acc-d-none">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/text_Justify_icon.svg' ); ?>" />                      
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-wbay-acc-text-align-0"><?php echo esc_html__("Text Align", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-wbay-acc-text-align-1 wbay-acc-d-none"><?php echo esc_html__("Align Left", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-wbay-acc-text-align-2 wbay-acc-d-none"><?php echo esc_html__("Align Right", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-wbay-acc-text-align-3 wbay-acc-d-none"><?php echo esc_html__("Align Center", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-wbay-acc-text-align-4 wbay-acc-d-none"><?php echo esc_html__("Justify", "accessibility-buddy"); ?></span>                                                            
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-saturation" data_wbay_acc_reader_content="saturation">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>                              
                                    <span class="wbay-acc-features-step"></span>                              
                                    <span class="wbay-acc-features-step"></span>                              
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-saturation-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/saturation_icon.png' ); ?>" />                      
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-saturation-0"><?php echo esc_html__("Saturation", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-saturation-1 wbay-acc-d-none"><?php echo esc_html__("Low Saturation", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-saturation-2 wbay-acc-d-none"><?php echo esc_html__("High Saturation", "accessibility-buddy"); ?></span>
                                <span class="wbay-acc-features_item_name wbay-acc-name-saturation-3 wbay-acc-d-none"><?php echo esc_html__("Desaturate", "accessibility-buddy"); ?></span>                                                                                
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-voice-navigation" data_wbay_acc_reader_content="voice navigation">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-voice-navigation-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/voice_navigation_icon.png' ); ?>" />
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name"><?php echo esc_html__("Voice Navigation", "accessibility-buddy"); ?></span>                                                                                        
                            </button>
                        </div> <!-- wbay-acc-features_item -->

                        <div class="wbay-acc-features_item">
                            <button class="wbay-acc-features-item-i wbay-acc-text-to-speech" data_wbay_acc_reader_content="text to speech">
                                <span class="wbay-acc-features-item-steps">
                                    <span class="wbay-acc-features-step"></span>
                                </span>
                                <span class="wbay-acc-features-item-icon">
                                    <span class="icon wbay-acc-icon-voice-text-to-speech-1">
                                        <img class="accessibility-button-img" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/text_to-speech_icon.png' ); ?>" />
                                    </span>
                                </span>
                                <span class="wbay-acc-features_item_name"><?php echo esc_html__("Text to Speech", "accessibility-buddy"); ?></span>                                                                                        
                            </button>
                        </div> <!-- wbay-acc-features_item -->
                                            
                        <!-- wbay-acc-d-none -->

                    </div><!-- wbay-acc-features-wrap /--> 

                </div>
            
            </div> <!-- wbay-acc-accessibility-wrap-body-wrap -->

            <div class="wbay-acc-accessibility-wrap-foot">
                <a href="https://www.webfulcreations.com/">
                    <img class="wbay-acc-accessibility-wrap-foot-logo" src="<?php echo esc_url( WBAY_URL . '/assets/images/webfulcreationsvision-logo.png' ); ?>" />
                </a>
            </div>

        </div>
    
        <?php
    
    }
    
    add_action('wp_footer', 'wbay_custom_content_after_body_open_tag');

endif;