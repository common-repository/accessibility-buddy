<?php
//Check if WP else Exit
if ( ! defined( 'ABSPATH' ) ) {
    exit();
}

if( ! function_exists( 'wbay_voice_navigation_pop_up' ) ) :

    function wbay_voice_navigation_pop_up() {
        ?>
            <div id="WbAyVoiceNavigationPopUp" class="wbay-acc-voice-navigation-pop-up wbay-acc-d-none">

                <div class="wbay-acc-voice-navigation-pop-up-header">
                    <button id="wbay-acc-voice-navigation-record-button" type="button" wbay_acc_data_command="voice navigation">
                        <img class="wa-by-play-solid" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/play-solid.svg' ); ?>" />
                        <img class="wa-by-pause-solid wbay-acc-d-none" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/pause-solid.svg' ); ?>" />
                    </button>

                    <fieldset id="wa-by-voice-navigation-fieldset">
                        <input type="text" id="wa-by-voice-navigation-input">                        
                        <!-- <input type="text" id="wa-by-voice-navigation-history"> -->
                    </fieldset>

                    <button id="wa-by-voice-navigation-po-up-body-close-button">
                        <img class="wa-by-plus-solid" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/plus-solid.svg' ); ?>" />
                        <img class="wa-by-minus-solid wbay-acc-d-none" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/minus-solid.svg' ); ?>" />
                    </button>

                    <button id="wa-by-voice-navigation-po-up-close-button">
                        <img class="wa-by-plus-solid" src="<?php echo esc_url( WBAY_URL . '/assets/images/icons/xmark-solid.svg' ); ?>" />                    
                    </button>

                </div><!-- wbay-acc-voice-navigation-pop-up-header -->

                <div class="wbay-acc-voice-navigation-pop-up-body wbay-acc-d-none" wbay_acc_data_command="wbay-acc-voice-navigation-body-hide">
                    
                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Help = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Help">
                                <?php echo esc_html__("Help", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Help me">
                                <?php echo esc_html__("Help me", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Show commands">
                                <?php echo esc_html__("Show commands", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Hide help = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Hide help">
                                <?php echo esc_html__("Hide help", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Hide commands">
                                <?php echo esc_html__("Hide commands", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Hide commands list">
                                <?php echo esc_html__("Hide commands list", "accessibility-buddy"); ?>                                
                            </button>

                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Scroll down = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Scroll down">
                                <?php echo esc_html__("Scroll down", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Page Down">
                                <?php echo esc_html__("Page Down", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Down">
                                <?php echo esc_html__("Down", "accessibility-buddy"); ?>                                
                            </button>                            

                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Scroll up = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Up">
                                <?php echo esc_html__("Up", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Scroll up">
                                <?php echo esc_html__("Scroll up", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Page Up">
                                <?php echo esc_html__("Page Up", "accessibility-buddy"); ?>                                
                            </button>

                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Go to top = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Page Top">
                                <?php echo esc_html__("Page Top", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Top">
                                <?php echo esc_html__("Top", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Go to top">
                                <?php echo esc_html__("Go to top", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->
                    
                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Go to bottom = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Go to bottom">
                                <?php echo esc_html__("Go to bottom", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Bottom">
                                <?php echo esc_html__("Bottom", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Page Bottom">
                                <?php echo esc_html__("Page Bottom", "accessibility-buddy"); ?>                                
                            </button>

                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Tab = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Tab">
                                <?php echo esc_html__("Tab", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Next">
                                <?php echo esc_html__("Next", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Next Tab">
                                <?php echo esc_html__("Next Tab", "accessibility-buddy"); ?>                                
                            </button>

                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Tab back = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Tab back">
                                <?php echo esc_html__("Tab back", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Previous">
                                <?php echo esc_html__("Previous", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Previous Tab">
                                <?php echo esc_html__("Previous Tab", "accessibility-buddy"); ?>                                
                            </button>

                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Show numbers = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="show numbers">
                                <?php echo esc_html__("Show numbers", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Display numbers">
                                <?php echo esc_html__("Display numbers", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Enable numbers">
                                <?php echo esc_html__("Enable numbers", "accessibility-buddy"); ?>                                
                            </button>

                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Hide numbers = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="hide numbers">
                                <?php echo esc_html__("Hide numbers", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="disable numbers">
                                <?php echo esc_html__("Disable numbers", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="remove numbers">
                                <?php echo esc_html__("Remove numbers", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Clear input = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Clear input">
                                <?php echo esc_html__("Clear input", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Clear">
                                <?php echo esc_html__("Clear", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Remove">
                                <?php echo esc_html__("Remove", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Enter = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Enter">
                                <?php echo esc_html__("Enter", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Submit">
                                <?php echo esc_html__("Submit", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Ok">
                                <?php echo esc_html__("Ok", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Reload = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Reload">
                                <?php echo esc_html__("Reload", "accessibility-buddy"); ?>                                
                            </button>
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Update">
                                <?php echo esc_html__("Update", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Refresh">
                                <?php echo esc_html__("Refresh", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Stop = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Stop">
                                <?php echo esc_html__("Stop", "accessibility-buddy"); ?>                                
                            </button>
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Cancel">
                                <?php echo esc_html__("Cancel", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Stop listening">
                                <?php echo esc_html__("Stop listening", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                    <div class="wbay-acc-voice-navigation-command-wrap">

                        <p class="wbay-acc-voice-navigation-command-wrap-text"><b><?php echo esc_html__("Exit = ", "accessibility-buddy");?></b> <span><?php echo esc_html__("available voice commands ", "accessibility-buddy"); ?></span> </p>                    

                        <div class="wbay-acc-voice-navigation-command-wrap-box">
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Exit">
                                <?php echo esc_html__("Exit", "accessibility-buddy"); ?>                                
                            </button>
                            
                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Quit">
                                <?php echo esc_html__("Quit", "accessibility-buddy"); ?>                                
                            </button>

                            <button class="wbay-acc-voice-navigation-command-button" wbay_acc_data_command="Close">
                                <?php echo esc_html__("Close", "accessibility-buddy"); ?>                                
                            </button>
                            
                        </div>

                    </div> <!-- wbay-acc-voice-navigation-command-wrap -->

                </div> <!-- wbay-acc-voice-navigation-pop-up-body -->

            </div> <!-- wbay-acc-voice-navigation-pop-up /-->

            <input type="hidden" id="wbay_acc_voiceRecognitionStartHelp" value="<?php echo esc_html__( ' (Help) (Help Me) (Show Commands) ', 'accessibility-buddy' ); ?>">
            <input type="hidden" id="wbay_acc_voiceRecognitionStart" value="<?php echo esc_html__( 'Say a command... ', 'accessibility-buddy' ); ?>">
            <input type="hidden" id="wbay_acc_voiceRecognitionEnd" value="<?php echo esc_html__( 'Voice recognition has stopped', 'accessibility-buddy' ); ?>">
            <input type="hidden" id="wbay_acc_voiceRecognitionErrorNoVoice" value="<?php echo esc_html__( 'Voice recognition has stopped, no voice detected.', 'accessibility-buddy' ); ?>">
            <input type="hidden" id="wbay_acc_voiceRecognitionErrorNoNetwork" value="<?php echo esc_html__( 'Network error. Check is you online and try again.', 'accessibility-buddy' ); ?>">
            <input type="hidden" id="wbay_acc_voiceRecognitionErrorNotAllowed" value="<?php echo esc_html__( 'Microphone access denied. Check is your microphone connected and try again.', 'accessibility-buddy' ); ?>">
            <input type="hidden" id="wbay_acc_voiceRecognitionErrorUnknown" value="<?php echo esc_html__( 'Voice recognition error. Try again.', 'accessibility-buddy' ); ?>">            

        <?php
    }
    
    add_action('wp_footer', 'wbay_voice_navigation_pop_up');

endif;

