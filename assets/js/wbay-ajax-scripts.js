// JavaScript Document
(function($) {
    "use strict";

    $("#AccessibilityButtonWrp").on( 'click' , function(){
    
        $(".wbay-acc-accessibility-wrap").removeClass("wbay-acc-accessibility-wrap-hide");

        $(".wbay-acc-accessibility-wrap").addClass("wbay-acc-accessibility-wrap-show");
        
        $("img.check-img-hide").addClass("wbay_acc_check_img_show");

        $("#AccessibilityButtonWrp").addClass("accessibility-button_active");

        if($('img.check-img-hide').hasClass('wbay_acc_check_img_show')) {
            Cookies.set("wbay_acc_check_img_show", "wbay_acc_check_img_show", { path: '/' });
        } 

    });
    
    $("#wbAyCloseButton").on( 'click' ,function(){
        $(".wbay-acc-accessibility-wrap").addClass("wbay-acc-accessibility-wrap-hide");
    });

    $(document).mouseup(function(e) {
        var container = $("#WbAyAccessibilityWrap");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".wbay-acc-accessibility-wrap").addClass("wbay-acc-accessibility-wrap-hide");
            $(".wbay-acc-accessibility-wrap").removeClass("wbay-acc-accessibility-wrap-show");
        }
    });

    $(document).ready(function(){

        // letter spacing button        
        $(".wbay-acc-letter-spacing").on( 'click' , function() {
            
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'letter spacing' ) {

                Cookies.set("wbay_acc_data_letter_spacing", "letter spacing stap1" , { path: '/' });

                $(".wbay-acc-letter-spacing").addClass("stap1");
                $( '.wbay-acc-letter-spacing' ).attr( 'data_wbay_acc_reader_content', 'letter spacing stap1' );                
                $('.wbay-acc-letter-spacing').closest(".wbay-acc-features_item").addClass("active");
                $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button").addClass("wa-by-letter-spacing-stap1");

            }

            if( $data_wbay_acc_reader_content == 'letter spacing stap1' ) {
                Cookies.set("wbay_acc_data_letter_spacing", "letter spacing stap2" , { path: '/' });
                $(".wbay-acc-letter-spacing").addClass("stap1 stap2");
                $( '.wbay-acc-letter-spacing' ).attr( 'data_wbay_acc_reader_content', 'letter spacing stap2' );
                $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap1");
                $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").addClass("wa-by-letter-spacing-stap2");
            }

            if( $data_wbay_acc_reader_content == 'letter spacing stap2' ) {
                Cookies.set("wbay_acc_data_letter_spacing", "letter spacing stap3" , { path: '/' });
                $(".wbay-acc-letter-spacing").addClass("stap1 stap2 stap3 ");
                $( '.wbay-acc-letter-spacing' ).attr( 'data_wbay_acc_reader_content', 'letter spacing stap3' );
                $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap2");
                $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").addClass("wa-by-letter-spacing-stap3");
            }

            if( $data_wbay_acc_reader_content == 'letter spacing stap3' ) {                
                Cookies.remove('wbay_acc_data_letter_spacing', { path: '/' });
                $(".wbay-acc-letter-spacing").removeClass("stap1 stap2 stap3 ");
                $( '.wbay-acc-letter-spacing' ).attr( 'data_wbay_acc_reader_content', 'letter spacing' );
                $('.wbay-acc-letter-spacing').closest(".wbay-acc-features_item").removeClass("active");
                $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap3");
            }

        });

        // wbay-acc-highlight-links        
        $(".wbay-acc-highlight-links").on( 'click' , function() {
            
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'highlight links' ) {
                Cookies.set("wbay_acc_data_highlight_links", "highlight links stap1", { path: '/' });
                $(".wbay-acc-highlight-links").addClass("stap1");
                $( '.wbay-acc-highlight-links' ).attr( 'data_wbay_acc_reader_content', 'highlight links stap1' );                
                $('.wbay-acc-highlight-links').closest(".wbay-acc-features_item").addClass("active");
                $("a , button, base ").addClass("wa-by-highlight-links-stap1");
                $("button.wbay-acc-features-item-i, button#WbAyBtnResetWidget, button#wbAyCloseButton ").removeClass("wa-by-highlight-links-stap1");

            }
            if( $data_wbay_acc_reader_content == 'highlight links stap1' ) {
                Cookies.remove('wbay_acc_data_highlight_links', { path: '/' });
                $(".wbay-acc-highlight-links").removeClass("stap1");
                $( '.wbay-acc-highlight-links' ).attr( 'data_wbay_acc_reader_content', 'highlight links' );                
                $('.wbay-acc-highlight-links').closest(".wbay-acc-features_item").removeClass("active");
                $("a , button, base ").removeClass("wa-by-highlight-links-stap1");
            }

        });

        // Bigger Text button    
        $(".wbay-acc-bigger-text").on( 'click' , function() {
            
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'Bigger Text' ) {
                Cookies.set("wbay_acc_data_bigger_text", "bigger text stap1", { path: '/' });
                $(".wbay-acc-bigger-text").addClass("stap1");
                $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap1' );                
                $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
                $("footer , header , section").addClass("wa-by-bigger-text-stap1");
            }

            if( $data_wbay_acc_reader_content == 'bigger text stap1' ) {
                Cookies.set("wbay_acc_data_bigger_text", "bigger text stap2" , { path: '/' });
                $(".wbay-acc-bigger-text").addClass("stap1 stap2");
                $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap2' );                
                $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
                $("footer , header , section").removeClass("wa-by-bigger-text-stap1");
                $("footer , header , section").addClass("wa-by-bigger-text-stap2");
            }

            if( $data_wbay_acc_reader_content == 'bigger text stap2' ) {
                Cookies.set("wbay_acc_data_bigger_text", "bigger text stap3" , { path: '/' });
                $(".wbay-acc-bigger-text").addClass("stap1 stap2 stap3");
                $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap3' );                
                $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
                $("footer , header , section").removeClass("wa-by-bigger-text-stap2");
                $("footer , header , section").addClass("wa-by-bigger-text-stap3");
            }

            if( $data_wbay_acc_reader_content == 'bigger text stap3' ) {
                Cookies.set("wbay_acc_data_bigger_text", "bigger text stap4" , { path: '/' });
                $(".wbay-acc-bigger-text").addClass("stap1 stap2 stap3 stap4");
                $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap4' );                
                $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
                $("footer , header , section").removeClass("wa-by-bigger-text-stap3");
                $("footer , header , section").addClass("wa-by-bigger-text-stap4");
            }

            if( $data_wbay_acc_reader_content == 'bigger text stap4' ) {

                Cookies.remove('wbay_acc_data_bigger_text', { path: '/' });            
                $(".wbay-acc-bigger-text").removeClass("stap1 stap2 stap3 stap4");
                $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'Bigger Text' );                
                $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").removeClass("active");
                $("footer , header , section").removeClass("wa-by-bigger-text-stap4");

            }

        });

        //Pause Animations    
        $(".wbay-acc-pause-animations").on( 'click' , function() {
            
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");
            
            if( $data_wbay_acc_reader_content == 'pause animations' ) {
                Cookies.set("wbay_acc_data_pause_animations", "pause animations stap1" , { path: '/' });
                $(".wbay-acc-pause-animations").addClass("stap1");
                $( '.wbay-acc-pause-animations' ).attr( 'data_wbay_acc_reader_content', 'pause animations stap1' );                
                $('.wbay-acc-pause-animations').closest(".wbay-acc-features_item").addClass("active");
                $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-2').removeClass("wbay-acc-d-none");
                $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-1').addClass("wbay-acc-d-none");
                $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-2').removeClass("wbay-acc-d-none");
                $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-1').addClass("wbay-acc-d-none");
                wbay_acc_stop_videos();
            }

            if( $data_wbay_acc_reader_content == 'pause animations stap1' ) {                
                Cookies.remove('wbay_acc_data_pause_animations', { path: '/' });
                $(".wbay-acc-pause-animations").removeClass("stap1");
                $( '.wbay-acc-pause-animations' ).attr( 'data_wbay_acc_reader_content', 'pause animations' );                
                $('.wbay-acc-pause-animations').closest(".wbay-acc-features_item").removeClass("active");
                $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-2').addClass("wbay-acc-d-none");
                $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-1').removeClass("wbay-acc-d-none");
                $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-2').addClass("wbay-acc-d-none");
                $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-1').removeClass("wbay-acc-d-none");
                wbay_acc_play_videos();
            }
        });

        //hide images    
        $(".wbay-acc-hide-images").on( 'click' , function() {
    
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");
            
            if( $data_wbay_acc_reader_content == 'hide images' ) {
                Cookies.set("wbay_acc_data_hide_images", "hide images stap1" , { path: '/' });
                $(".wbay-acc-hide-images").addClass("stap1");
                $( '.wbay-acc-hide-images' ).attr( 'data_wbay_acc_reader_content', 'hide images stap1' );                
                $('.wbay-acc-hide-images').closest(".wbay-acc-features_item").addClass("active");
                $("body").addClass("wbay-acc-hide-images");
            }

            if( $data_wbay_acc_reader_content == 'hide images stap1' ) {
                Cookies.remove('wbay_acc_data_hide_images', { path: '/' });
                $(".wbay-acc-hide-images").removeClass("stap1");
                $( '.wbay-acc-hide-images' ).attr( 'data_wbay_acc_reader_content', 'hide images' );                
                $('.wbay-acc-hide-images').closest(".wbay-acc-features_item").removeClass("active");
                $("body").removeClass("wbay-acc-hide-images");
            }
        });

        //fyslexia friendly    
        $(".wbay-acc-dyslexia-friendly").on( 'click' , function() {
    
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");
            
            if( $data_wbay_acc_reader_content == 'fyslexia friendly' ) {
                Cookies.set("wbay_acc_data_dyslexia_friendly", "fyslexia friendly stap1" , { path: '/' });
                $(".wbay-acc-dyslexia-friendly").addClass("stap1");
                $( '.wbay-acc-dyslexia-friendly' ).attr( 'data_wbay_acc_reader_content', 'fyslexia friendly stap1' );                
                $('.wbay-acc-dyslexia-friendly').closest(".wbay-acc-features_item").addClass("active");                                
                $("body").addClass("wbay-acc-readabler-dyslexia-font");       
            }

            if( $data_wbay_acc_reader_content == 'fyslexia friendly stap1' ) {                
                Cookies.set("wbay_acc_data_dyslexia_friendly", "fyslexia friendly stap2" , { path: '/' });
                $(".wbay-acc-dyslexia-friendly").addClass("stap1 stap2");
                $('.wbay-acc-dyslexia-friendly').closest(".wbay-acc-features_item").addClass("active");                                
                $( '.wbay-acc-dyslexia-friendly' ).attr( 'data_wbay_acc_reader_content', 'fyslexia friendly stap2' );                                                
                $('.wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-2 , .wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-2').removeClass("wbay-acc-d-none");
                $('.wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-1 , .wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-1').addClass("wbay-acc-d-none");
                $("body").removeClass("wbay-acc-readabler-dyslexia-font");    
                $("body").addClass("wbay-acc-readabler-Arial-font");
            }

            if( $data_wbay_acc_reader_content == 'fyslexia friendly stap2' ) {                
                Cookies.remove('wbay_acc_data_dyslexia_friendly', { path: '/' });
                $(".wbay-acc-dyslexia-friendly").removeClass("stap1 stap2");
                $( '.wbay-acc-dyslexia-friendly' ).attr( 'data_wbay_acc_reader_content', 'fyslexia friendly' );                                                
                $('.wbay-acc-dyslexia-friendly').closest(".wbay-acc-features_item").removeClass("active");
                $('.wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-2 , .wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-2').addClass("wbay-acc-d-none");
                $('.wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-1 , .wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-1').removeClass("wbay-acc-d-none");
                $("body").removeClass("wbay-acc-readabler-dyslexia-font wbay-acc-readabler-Arial-font");    
            }

        });

        //Enhanced Cursor    
        $(".wbay-acc-enhanced-cursor").on( 'click' , function() {

            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");
            
            if( $data_wbay_acc_reader_content == 'enhanced cursor' ) {
                Cookies.set("wbay_acc_data_enhanced_cursor", "enhanced cursor stap1" , { path: '/' });                
                $(".wbay-acc-enhanced-cursor").addClass("stap1");
                $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor stap1' );                
                $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").addClass("active");                                
                $("body").addClass("wbay-acc-enhanced-cursor-stap1");
                $(".wbay-acc-name-enhanced-cursor-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-enhanced-cursor-01").removeClass("wbay-acc-d-none");
            }

            if( $data_wbay_acc_reader_content == 'enhanced cursor stap1' ) {
                Cookies.set("wbay_acc_data_enhanced_cursor", "enhanced cursor stap2" , { path: '/' });
                $(".wbay-acc-enhanced-cursor").addClass("stap1 stap2");
                $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor stap2' );                
                $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").addClass("active");                                
                $("body").removeClass("wbay-acc-enhanced-cursor-stap1");
                $("body").addClass("wbay-acc-enhanced-cursor-stap2");
                $(".wbay-acc-icon-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-01").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-enhanced-cursor-2 , .wbay-acc-name-enhanced-cursor-2").removeClass("wbay-acc-d-none");            
                wbay_acc_reading_mask();
            }

            if( $data_wbay_acc_reader_content == 'enhanced cursor stap2' ) {
                Cookies.set("wbay_acc_data_enhanced_cursor", "enhanced cursor stap3" , { path: '/' });
                $(".wbay-acc-enhanced-cursor").addClass("stap1 stap2 stap3");
                $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor stap3' );                
                $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").addClass("active");                                
                $("body").removeClass("wbay-acc-enhanced-cursor-stap2");
                $("body").addClass("wbay-acc-enhanced-cursor-stap3");
                $(".wbay-acc-icon-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-01 , .wbay-acc-icon-enhanced-cursor-2 , .wbay-acc-name-enhanced-cursor-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-enhanced-cursor-3 , .wbay-acc-name-enhanced-cursor-3").removeClass("wbay-acc-d-none");
                $('.enhanced_cursor_stap2').remove();                              
                wbay_acc_reading_guide();
            }

            if( $data_wbay_acc_reader_content == 'enhanced cursor stap3' ) {
                Cookies.remove('wbay_acc_data_enhanced_cursor', { path: '/' });
                $(".wbay-acc-enhanced-cursor").removeClass("stap1 stap2 stap3");
                $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor' );                
                $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").removeClass("active");                       
                $("body").removeClass("wbay-acc-enhanced-cursor-stap3");
                $(".wbay-acc-icon-enhanced-cursor-3 , .wbay-acc-name-enhanced-cursor-3 , .wbay-acc-name-enhanced-cursor-01 , .wbay-acc-icon-enhanced-cursor-2 , .wbay-acc-name-enhanced-cursor-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-1").removeClass("wbay-acc-d-none");                
                $('#wbay_acc_reading_guide_horizontal').remove();                     
            }

        });

        // tooltips        
        $(".wbay-acc-tooltips").on( 'click' , function() {
    
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'tooltips' ) {
                Cookies.set("wbay_acc_data_tooltips", "tooltips stap1" , { path: '/' });
                $(".wbay-acc-tooltips").addClass("stap1");
                $( '.wbay-acc-tooltips' ).attr( 'data_wbay_acc_reader_content', 'tooltips stap1' );                
                $('.wbay-acc-tooltips').closest(".wbay-acc-features_item").addClass("active"); 
                wbay_acc_tooltips_show();               
            }

            if( $data_wbay_acc_reader_content == 'tooltips stap1' ) {
                Cookies.remove('wbay_acc_data_tooltips', { path: '/' });
                $(".wbay-acc-tooltips").removeClass("stap1");
                $( '.wbay-acc-tooltips' ).attr( 'data_wbay_acc_reader_content', 'tooltips' );                
                $('.wbay-acc-tooltips').closest(".wbay-acc-features_item").removeClass("active");
                $("#wbay_acc_reading_tooltips_show_html").hide();
                $("#wbay_acc_reading_tooltips_show_html").remove();
            }

        });

        // Line Height        
        $(".wbay-acc-line-height").on( 'click' , function() {

            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'line height' ) {
                Cookies.set('wbay_acc_data_line_height', 'line height stap1', { path: '/' });
                $(".wbay-acc-line-height").addClass("stap1");
                $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height stap1' );                
                $('.wbay-acc-line-height').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-line-height-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-line-height-1").removeClass("wbay-acc-d-none");
                $("body").addClass("wbay_acc_data_line_height_stap1");
            }

            if( $data_wbay_acc_reader_content == 'line height stap1' ) {
                Cookies.set("wbay_acc_data_line_height" , "line height stap2", { path: '/' } );
                $(".wbay-acc-line-height").addClass("stap1 stap2");
                $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height stap2' );                
                $('.wbay-acc-line-height').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-line-height-0 , .wbay-acc-name-line-height-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-line-height-2").removeClass("wbay-acc-d-none");
                $("body").removeClass("wbay_acc_data_line_height_stap1");
                $("body").addClass("wbay_acc_data_line_height_stap2");
            }

            if( $data_wbay_acc_reader_content == 'line height stap2' ) {
                Cookies.set("wbay_acc_data_line_height", "line height stap3", { path: '/' });
                $(".wbay-acc-line-height").addClass("stap1 stap2 stap3");
                $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height stap3' );                
                $('.wbay-acc-line-height').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-line-height-0 , .wbay-acc-name-line-height-1 , .wbay-acc-name-line-height-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-line-height-3").removeClass("wbay-acc-d-none");
                $("body").removeClass("wbay_acc_data_line_height_stap2");
                $("body").addClass("wbay_acc_data_line_height_stap3");
            }

            if( $data_wbay_acc_reader_content == 'line height stap3' ) {
                Cookies.remove('wbay_acc_data_line_height', { path: '/' });
                $(".wbay-acc-line-height").removeClass("stap1 stap2 stap3");
                $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height' );                
                $('.wbay-acc-line-height').closest(".wbay-acc-features_item").removeClass("active"); 
                $(".wbay-acc-name-line-height-3 , .wbay-acc-name-line-height-1 , .wbay-acc-name-line-height-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-line-height-0").removeClass("wbay-acc-d-none");
                $("body").removeClass("wbay_acc_data_line_height_stap3");
            }

        });

        // Text Align
        $(".wbay-acc-text-align").on( 'click' , function() {

            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'text align' ) {
                Cookies.set('wbay_acc_data_text_align', 'text align stap1', { path: '/' });
                $(".wbay-acc-text-align").addClass("stap1");
                $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap1' );                
                $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-1").removeClass("wbay-acc-d-none");                
                $("body").addClass("wbay-acc-text-align-stap1");            
            }

            if( $data_wbay_acc_reader_content == 'text align stap1' ) {
                Cookies.set('wbay_acc_data_text_align', 'text align stap2', { path: '/' });
                $(".wbay-acc-text-align").addClass("stap1 stap2");
                $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap2' );                
                $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-2").removeClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-2").removeClass("wbay-acc-d-none");
                $("body").removeClass("wbay-acc-text-align-stap1");            
                $("body").addClass("wbay-acc-text-align-stap2");            
            }

            if( $data_wbay_acc_reader_content == 'text align stap2' ) {
                Cookies.set('wbay_acc_data_text_align', 'text align stap3', { path: '/' });
                $(".wbay-acc-text-align").addClass("stap1 stap2 stap3");
                $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap3' );                
                $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-3").removeClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-3").removeClass("wbay-acc-d-none");
                $("body").removeClass("wbay-acc-text-align-stap1");
                $("body").removeClass("wbay-acc-text-align-stap2");            
                $("body").addClass("wbay-acc-text-align-stap3");            
            }

            if( $data_wbay_acc_reader_content == 'text align stap3' ) {
                Cookies.set('wbay_acc_data_text_align', 'text align stap4', { path: '/' });
                $(".wbay-acc-text-align").addClass("stap1 stap2 stap3 stap4");
                $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap4' );                
                $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-4").removeClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-4").removeClass("wbay-acc-d-none");
                $("body").removeClass("wbay-acc-text-align-stap1");
                $("body").removeClass("wbay-acc-text-align-stap2");            
                $("body").removeClass("wbay-acc-text-align-stap3");            
                $("body").addClass("wbay-acc-text-align-stap4");            
            }

            if( $data_wbay_acc_reader_content == 'text align stap4' ) {
                Cookies.remove('wbay_acc_data_text_align', { path: '/' });
                $(".wbay-acc-text-align").removeClass("stap1 stap2 stap3 stap4");
                $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align' );                
                $('.wbay-acc-text-align').closest(".wbay-acc-features_item").removeClass("active"); 
                $(".wbay-acc-name-wbay-acc-text-align-0").removeClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-wbay-acc-text-align-4").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-1").removeClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-icon-wbay-acc-text-align-4").addClass("wbay-acc-d-none");
                $("body").removeClass("wbay-acc-text-align-stap1");
                $("body").removeClass("wbay-acc-text-align-stap2");            
                $("body").removeClass("wbay-acc-text-align-stap3");            
                $("body").removeClass("wbay-acc-text-align-stap4");            

            }        

        });

        // saturation        
        $(".wbay-acc-saturation").on( 'click' , function() {

            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'saturation' ) {
                Cookies.set('wbay_acc_data_saturation', 'saturation stap1', { path: '/' });
                $(".wbay-acc-saturation").addClass("stap1");
                $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation stap1' );                
                $('.wbay-acc-saturation').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-saturation-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-1").removeClass("wbay-acc-d-none");
                $("html").addClass("wbay-acc-text-low-saturation");
            }

            if( $data_wbay_acc_reader_content == 'saturation stap1' ) {
                Cookies.set('wbay_acc_data_saturation', 'saturation stap2', { path: '/' });
                $(".wbay-acc-saturation").addClass("stap1 stap2");
                $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation stap2' );                
                $('.wbay-acc-saturation').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-saturation-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-2").removeClass("wbay-acc-d-none");
                $("html").addClass("wbay-acc-text-high-saturation");
            }

            if( $data_wbay_acc_reader_content == 'saturation stap2' ) {
                Cookies.set('wbay_acc_data_saturation', 'saturation stap3', { path: '/' });
                $(".wbay-acc-saturation").addClass("stap1 stap2 stap3");
                $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation stap3' );                
                $('.wbay-acc-saturation').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-name-saturation-0").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-3").removeClass("wbay-acc-d-none");
                $("html").addClass("wbay-acc-text-desaturate");
            }

            if( $data_wbay_acc_reader_content == 'saturation stap3' ) {
                Cookies.remove('wbay_acc_data_saturation', { path: '/' });
                $(".wbay-acc-saturation").removeClass("stap1 stap2 stap3");
                $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation' );                
                $('.wbay-acc-saturation').closest(".wbay-acc-features_item").removeClass("active"); 
                $(".wbay-acc-name-saturation-0").removeClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-saturation-3").addClass("wbay-acc-d-none");
                $("html").removeClass("wbay-acc-text-low-saturation");
                $("html").removeClass("wbay-acc-text-high-saturation");
                $("html").removeClass("wbay-acc-text-desaturate");
            }
            
        });

        // Contrast 
        $(".wbay-acc-contrast").on( 'click' , function() {
            
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'contrast' ) {
                Cookies.set('wbay_acc_data_contrast', 'contrast stap1', { path: '/' });
                $(".wbay-acc-contrast").addClass("stap1");
                $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast stap1' );                
                $('.wbay-acc-contrast').closest(".wbay-acc-features_item").addClass("active");                 
                $(".wbay-acc-contrast-1, .wbay-acc-name-contrast-1").addClass("wbay-acc-d-none");                
                $(".wbay-acc-contrast-2, .wbay-acc-name-contrast-2").removeClass("wbay-acc-d-none");
                $("html").addClass("wbay-acc-contrast-stap1");
            }

            if( $data_wbay_acc_reader_content == 'contrast stap1' ) {
                Cookies.set('wbay_acc_data_contrast', 'contrast stap2', { path: '/' });
                $(".wbay-acc-contrast").addClass("stap1 stap2");
                $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast stap2' );                
                $('.wbay-acc-contrast').closest(".wbay-acc-features_item").addClass("active"); 
                $(".wbay-acc-contrast-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-3").removeClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-3").removeClass("wbay-acc-d-none");
                $("html").removeClass("wbay-acc-contrast-stap1");
                $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").addClass("wbay-acc-contrast-stap2");
                $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap2");                
            }

            if( $data_wbay_acc_reader_content == 'contrast stap2' ) {
                Cookies.set('wbay_acc_data_contrast', 'contrast stap3', { path: '/' });
                $(".wbay-acc-contrast").addClass("stap1 stap2 stap3");
                $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast stap3' );                
                $('.wbay-acc-contrast').closest(".wbay-acc-features_item").addClass("active");                 
                $(".wbay-acc-contrast-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-1").addClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-4").removeClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-4").removeClass("wbay-acc-d-none");
                $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").removeClass("wbay-acc-contrast-stap2");
                $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").addClass("wbay-acc-contrast-stap3");
                $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap2");
                $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap3");                
                $("#WbAyVoiceNavigationPopUp, #WbAyVoiceNavigationPopUp div, #WbAyVoiceNavigationPopUp footer, #WbAyVoiceNavigationPopUp header, #WbAyVoiceNavigationPopUp section, #WbAyVoiceNavigationPopUp h1, #WbAyVoiceNavigationPopUp h2, #WbAyVoiceNavigationPopUp h3, #WbAyVoiceNavigationPopUp h4, #WbAyVoiceNavigationPopUp h5, #WbAyVoiceNavigationPopUp h6, #WbAyVoiceNavigationPopUp p, #WbAyVoiceNavigationPopUp li, #WbAyVoiceNavigationPopUp span, #WbAyVoiceNavigationPopUp strong, #WbAyVoiceNavigationPopUp em, #WbAyVoiceNavigationPopUp abbr, #WbAyVoiceNavigationPopUp acronym, #WbAyVoiceNavigationPopUp address, #WbAyVoiceNavigationPopUp bdo, #WbAyVoiceNavigationPopUp blockquote, #WbAyVoiceNavigationPopUp cite, #WbAyVoiceNavigationPopUp q, #WbAyVoiceNavigationPopUp code, #WbAyVoiceNavigationPopUp ins, #WbAyVoiceNavigationPopUp del, #WbAyVoiceNavigationPopUp dfn, #WbAyVoiceNavigationPopUp kbd, #WbAyVoiceNavigationPopUp pre, #WbAyVoiceNavigationPopUp samp, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp ul").removeClass("wbay-acc-contrast-stap3");
            }

            if( $data_wbay_acc_reader_content == 'contrast stap3' ) {                
                Cookies.remove('wbay_acc_data_contrast', { path: '/' });
                $(".wbay-acc-contrast").removeClass("stap1 stap2 stap3");
                $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast' );                
                $('.wbay-acc-contrast').closest(".wbay-acc-features_item").removeClass("active");                               
                $(".wbay-acc-contrast-4").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-4").addClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-2").addClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-3").addClass("wbay-acc-d-none");
                $(".wbay-acc-name-contrast-1").removeClass("wbay-acc-d-none");
                $(".wbay-acc-contrast-1").removeClass("wbay-acc-d-none");
                $("html").removeClass("wbay-acc-contrast-stap1");
                $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").removeClass("wbay-acc-contrast-stap2");
                $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").removeClass("wbay-acc-contrast-stap3");
                $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap1");                
                $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap2");
                $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap3");
                $("#WbAyVoiceNavigationPopUp, #WbAyVoiceNavigationPopUp div, #WbAyVoiceNavigationPopUp footer, #WbAyVoiceNavigationPopUp header, #WbAyVoiceNavigationPopUp section, #WbAyVoiceNavigationPopUp h1, #WbAyVoiceNavigationPopUp h2, #WbAyVoiceNavigationPopUp h3, #WbAyVoiceNavigationPopUp h4, #WbAyVoiceNavigationPopUp h5, #WbAyVoiceNavigationPopUp h6, #WbAyVoiceNavigationPopUp p, #WbAyVoiceNavigationPopUp li, #WbAyVoiceNavigationPopUp span, #WbAyVoiceNavigationPopUp strong, #WbAyVoiceNavigationPopUp em, #WbAyVoiceNavigationPopUp abbr, #WbAyVoiceNavigationPopUp acronym, #WbAyVoiceNavigationPopUp address, #WbAyVoiceNavigationPopUp bdo, #WbAyVoiceNavigationPopUp blockquote, #WbAyVoiceNavigationPopUp cite, #WbAyVoiceNavigationPopUp q, #WbAyVoiceNavigationPopUp code, #WbAyVoiceNavigationPopUp ins, #WbAyVoiceNavigationPopUp del, #WbAyVoiceNavigationPopUp dfn, #WbAyVoiceNavigationPopUp kbd, #WbAyVoiceNavigationPopUp pre, #WbAyVoiceNavigationPopUp samp, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp ul").removeClass("wbay-acc-contrast-stap3");
            }
            
        });

        // voice navigation
        $(".wbay-acc-voice-navigation").on( 'click' , function() {
    
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'voice navigation' ) {
                
                Cookies.set('wbay_acc_data_voice_navigation', 'voice navigation stap1', { path: '/' });
                $('.wbay-acc-voice-navigation').addClass("stap1");
                $( '.wbay-acc-voice-navigation' ).attr( 'data_wbay_acc_reader_content', 'voice navigation stap1' );                
                $('.wbay-acc-voice-navigation').closest(".wbay-acc-features_item").addClass("active");                        
                $('#WbAyVoiceNavigationPopUp').removeClass("wbay-acc-d-none");                
                $('#WbAyVoiceNavigationPopUp').addClass("wbay-acc-voice-navigation-pop-up-active");
                $('#wbay-acc-voice-navigation-record-button').click();
                $('body').addClass("wbay-acc-voice-navigation-stap1");    
            }

            if( $data_wbay_acc_reader_content == 'voice navigation stap1' ) {                
                Cookies.remove('wbay_acc_data_voice_navigation', { path: '/' });
                $('.wbay-acc-voice-navigation').removeClass("stap1");
                $( '.wbay-acc-voice-navigation').attr( 'data_wbay_acc_reader_content', 'voice navigation' );                
                $('.wbay-acc-voice-navigation').closest(".wbay-acc-features_item").removeClass("active");
                $('#WbAyVoiceNavigationPopUp').addClass("wbay-acc-d-none");
                $('#WbAyVoiceNavigationPopUp').removeClass("wbay-acc-voice-navigation-pop-up-active");
                $('#wbay-acc-voice-navigation-record-button').click();
                $('body').removeClass("wbay-acc-voice-navigation-stap1");
            }            
        });

    });
    
    // Reset Button Remove Cookie
    $(document).ready(function(){

        $("#WbAyBtnResetWidget").on( 'click' , function() {
                    
            $(".wbay-acc-accessibility-wrap-body-massage").removeClass("wbay-acc-body-massage-hide");

            Cookies.remove('wbay_acc_check_img_show', { path: '/' });

            $("img.check-img-hide").removeClass("wbay_acc_check_img_show");
        
            $("#AccessibilityButtonWrp").removeClass("accessibility-button_active");

            // letter spacing cookie
            Cookies.remove('wbay_acc_data_letter_spacing', { path: '/' });
            $(".wbay-acc-letter-spacing").removeClass("stap1 stap2 stap3 ");
            $( '.wbay-acc-letter-spacing' ).attr( 'data_wbay_acc_reader_content', 'letter spacing' );
            $('.wbay-acc-letter-spacing').closest(".wbay-acc-features_item").removeClass("active");
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap1");
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap2");
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap3");

            // Highlight Links cookie
            Cookies.remove('wbay_acc_data_highlight_links', { path: '/' });            
            $(".wbay-acc-highlight-links").removeClass("stap1");
            $( '.wbay-acc-highlight-links' ).attr( 'data_wbay_acc_reader_content', 'highlight links' );                
            $('.wbay-acc-highlight-links').closest(".wbay-acc-features_item").removeClass("active");
            $("a , button, base ").removeClass("wa-by-highlight-links-stap1");

            // Bigger Text cookie
            Cookies.remove('wbay_acc_data_bigger_text', { path: '/' });            
            $(".wbay-acc-bigger-text").removeClass("stap1 stap2 stap3 stap4");
            $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'Bigger Text' );                
            $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").removeClass("active");
            $("footer , header , section").removeClass("wa-by-bigger-text-stap1");
            $("footer , header , section").removeClass("wa-by-bigger-text-stap2");
            $("footer , header , section").removeClass("wa-by-bigger-text-stap3");
            $("footer , header , section").removeClass("wa-by-bigger-text-stap4");

            //Pause Animations
            Cookies.remove('wbay_acc_data_pause_animations', { path: '/' });
            $(".wbay-acc-pause-animations").removeClass("stap1");
            $( '.wbay-acc-pause-animations' ).attr( 'data_wbay_acc_reader_content', 'pause animations' );                
            $('.wbay-acc-pause-animations').closest(".wbay-acc-features_item").removeClass("active");
            $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-2').addClass("wbay-acc-d-none");
            $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-1').removeClass("wbay-acc-d-none");
            $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-2').addClass("wbay-acc-d-none");
            $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-1').removeClass("wbay-acc-d-none");
            wbay_acc_play_videos();
            
            //hide images    
            Cookies.remove('wbay_acc_data_hide_images', { path: '/' });
            $(".wbay-acc-hide-images").removeClass("stap1");
            $( '.wbay-acc-hide-images' ).attr( 'data_wbay_acc_reader_content', 'hide images' );                
            $('.wbay-acc-hide-images').closest(".wbay-acc-features_item").removeClass("active");
            $("body").removeClass("wbay-acc-hide-images");

            //fyslexia friendly

            Cookies.remove('wbay_acc_data_dyslexia_friendly', { path: '/' });
            $(".wbay-acc-dyslexia-friendly").removeClass("stap1 stap2");
            $( '.wbay-acc-dyslexia-friendly' ).attr( 'data_wbay_acc_reader_content', 'fyslexia friendly' );                                                
            $('.wbay-acc-dyslexia-friendly').closest(".wbay-acc-features_item").removeClass("active");
            $('.wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-2 , .wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-2').addClass("wbay-acc-d-none");
            $('.wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-1 , .wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-1').removeClass("wbay-acc-d-none");        
            $("body").removeClass("wbay-acc-readabler-dyslexia-font wbay-acc-readabler-Arial-font");

            //Enhanced Cursor 
            Cookies.remove('wbay_acc_data_enhanced_cursor', { path: '/' });
            $(".wbay-acc-enhanced-cursor").removeClass("stap1 stap2 stap3");
            $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor' );                
            $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").removeClass("active");                       
            $("body").removeClass("wbay-acc-enhanced-cursor-stap1 wbay-acc-enhanced-cursor-stap2 wbay-acc-enhanced-cursor-stap3");
            $(".wbay-acc-icon-enhanced-cursor-3 , .wbay-acc-name-enhanced-cursor-3 , .wbay-acc-name-enhanced-cursor-01 , .wbay-acc-icon-enhanced-cursor-2 , .wbay-acc-name-enhanced-cursor-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-1").removeClass("wbay-acc-d-none");                
            $('#wbay_acc_reading_guide_horizontal , .enhanced_cursor_stap2 ').remove();
            
            // tooltips
            Cookies.remove('wbay_acc_data_tooltips', { path: '/' });
            $(".wbay-acc-tooltips").removeClass("stap1");
            $( '.wbay-acc-tooltips' ).attr( 'data_wbay_acc_reader_content', 'tooltips' );                
            $('.wbay-acc-tooltips').closest(".wbay-acc-features_item").removeClass("active");
            $("#wbay_acc_reading_tooltips_show_html").hide();
            $("#wbay_acc_reading_tooltips_show_html").remove();
            
            // Line Height
            Cookies.remove('wbay_acc_data_line_height', { path: '/' });
            $(".wbay-acc-line-height").removeClass("stap1 stap2 stap3");
            $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height' );                
            $('.wbay-acc-line-height').closest(".wbay-acc-features_item").removeClass("active"); 
            $(".wbay-acc-name-line-height-3 , .wbay-acc-name-line-height-1 , .wbay-acc-name-line-height-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-line-height-0").removeClass("wbay-acc-d-none");
            $("body").removeClass("wbay_acc_data_line_height_stap1");
            $("body").removeClass("wbay_acc_data_line_height_stap2");
            $("body").removeClass("wbay_acc_data_line_height_stap3");

            // Text Align
            Cookies.remove('wbay_acc_data_text_align', { path: '/' }); 
            $(".wbay-acc-text-align").removeClass("stap1 stap2 stap3 stap4");
            $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align' );                
            $('.wbay-acc-text-align').closest(".wbay-acc-features_item").removeClass("active"); 
            $(".wbay-acc-name-wbay-acc-text-align-0").removeClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-4").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-1").removeClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-4").addClass("wbay-acc-d-none");
            $("body").removeClass("wbay-acc-text-align-stap1");
            $("body").removeClass("wbay-acc-text-align-stap2");            
            $("body").removeClass("wbay-acc-text-align-stap3");            
            $("body").removeClass("wbay-acc-text-align-stap4");

            // saturation
            Cookies.remove('wbay_acc_data_saturation', { path: '/' });
            $(".wbay-acc-saturation").removeClass("stap1 stap2 stap3");
            $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation' );                
            $('.wbay-acc-saturation').closest(".wbay-acc-features_item").removeClass("active"); 
            $(".wbay-acc-name-saturation-0").removeClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-3").addClass("wbay-acc-d-none");
            $("html").removeClass("wbay-acc-text-low-saturation");
            $("html").removeClass("wbay-acc-text-high-saturation");
            $("html").removeClass("wbay-acc-text-desaturate");

            // Contrast
            Cookies.remove('wbay_acc_data_contrast', { path: '/' });
            $(".wbay-acc-contrast").removeClass("stap1 stap2 stap3");
            $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast' );                
            $('.wbay-acc-contrast').closest(".wbay-acc-features_item").removeClass("active");                               
            $(".wbay-acc-contrast-4").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-4").addClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-1").removeClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-1").removeClass("wbay-acc-d-none");
            $("html").removeClass("wbay-acc-contrast-stap1");
            $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").removeClass("wbay-acc-contrast-stap2");
            $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").removeClass("wbay-acc-contrast-stap3");
            $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap1");                
            $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap2");
            $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap3");
            $("#WbAyVoiceNavigationPopUp, #WbAyVoiceNavigationPopUp div, #WbAyVoiceNavigationPopUp footer, #WbAyVoiceNavigationPopUp header, #WbAyVoiceNavigationPopUp section, #WbAyVoiceNavigationPopUp h1, #WbAyVoiceNavigationPopUp h2, #WbAyVoiceNavigationPopUp h3, #WbAyVoiceNavigationPopUp h4, #WbAyVoiceNavigationPopUp h5, #WbAyVoiceNavigationPopUp h6, #WbAyVoiceNavigationPopUp p, #WbAyVoiceNavigationPopUp li, #WbAyVoiceNavigationPopUp span, #WbAyVoiceNavigationPopUp strong, #WbAyVoiceNavigationPopUp em, #WbAyVoiceNavigationPopUp abbr, #WbAyVoiceNavigationPopUp acronym, #WbAyVoiceNavigationPopUp address, #WbAyVoiceNavigationPopUp bdo, #WbAyVoiceNavigationPopUp blockquote, #WbAyVoiceNavigationPopUp cite, #WbAyVoiceNavigationPopUp q, #WbAyVoiceNavigationPopUp code, #WbAyVoiceNavigationPopUp ins, #WbAyVoiceNavigationPopUp del, #WbAyVoiceNavigationPopUp dfn, #WbAyVoiceNavigationPopUp kbd, #WbAyVoiceNavigationPopUp pre, #WbAyVoiceNavigationPopUp samp, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp ul").removeClass("wbay-acc-contrast-stap3");

            // voice navigation
            Cookies.remove('wbay_acc_data_voice_navigation', { path: '/' });
            $('.wbay-acc-voice-navigation').removeClass("stap1");
            $( '.wbay-acc-voice-navigation').attr( 'data_wbay_acc_reader_content', 'voice navigation' );                
            $('.wbay-acc-voice-navigation').closest(".wbay-acc-features_item").removeClass("active");
            $('#WbAyVoiceNavigationPopUp').addClass("wbay-acc-d-none");
            $('#WbAyVoiceNavigationPopUp').removeClass("wbay-acc-voice-navigation-pop-up-active");
            $('#wbay-acc-voice-navigation-record-button').click();
            $('body').removeClass("wbay-acc-voice-navigation-stap1");

            window.setTimeout(function(){
                $(".wbay-acc-accessibility-wrap-body-massage").addClass("wbay-acc-body-massage-hide");
            }, 2000); //<-- Delay in milliseconds
              
        });
    });

    $(window).load(function() {
    
        if(Cookies.get("wbay_acc_check_img_show") == 'wbay_acc_check_img_show' ) {
            $("img.check-img-hide").addClass("wbay_acc_check_img_show");            
        }

        // letter spacing cookie        
        if(Cookies.get("wbay_acc_data_letter_spacing") == 'letter spacing stap1' ) {
            $(".wbay-acc-letter-spacing").addClass("stap1");
            $( ".wbay-acc-letter-spacing" ).attr( 'data_wbay_acc_reader_content', 'letter spacing stap1' );      
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").addClass("wa-by-letter-spacing-stap1"); 
        }
        if(Cookies.get("wbay_acc_data_letter_spacing") == 'letter spacing stap2' ) {
            $(".wbay-acc-letter-spacing").addClass("stap1 stap2");
            $( ".wbay-acc-letter-spacing" ).attr( 'data_wbay_acc_reader_content', 'letter spacing stap2' );
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap1");
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").addClass("wa-by-letter-spacing-stap2");       
        }
        if(Cookies.get("wbay_acc_data_letter_spacing") == 'letter spacing stap3' ) {
            $(".wbay-acc-letter-spacing").addClass("stap1 stap2 stap3");
            $( ".wbay-acc-letter-spacing" ).attr( 'data_wbay_acc_reader_content', 'letter spacing stap3' );
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").removeClass("wa-by-letter-spacing-stap2");
            $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").addClass("wa-by-letter-spacing-stap3"); 
        }
        if((Cookies.get("wbay_acc_data_letter_spacing"))){ 
            $('.wbay-acc-letter-spacing').closest(".wbay-acc-features_item").addClass("active");
        }

        // wbay-acc-highlight-links cookie
        if(Cookies.get("wbay_acc_data_highlight_links") == 'highlight links stap1' ) {
            $(".wbay-acc-highlight-links").addClass("stap1");
            $( '.wbay-acc-highlight-links' ).attr( 'data_wbay_acc_reader_content', 'highlight links stap1' );                
            $('.wbay-acc-highlight-links').closest(".wbay-acc-features_item").addClass("active");   
            $("a , button, base ").addClass("wa-by-highlight-links-stap1");
            $("button.wbay-acc-features-item-i, button#WbAyBtnResetWidget, button#wbAyCloseButton ").removeClass("wa-by-highlight-links-stap1");
        }

        // Bigger Text cookie
        if(Cookies.get("wbay_acc_data_bigger_text") == 'bigger text stap1' ) {
            $(".wbay-acc-bigger-text").addClass("stap1");
            $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap1' );                
            $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
            $("footer , header , section").addClass("wa-by-bigger-text-stap1");
        }
        if(Cookies.get("wbay_acc_data_bigger_text") == 'bigger text stap2' ) {
            $(".wbay-acc-bigger-text").addClass("stap1 stap2");
            $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap2' );                
            $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
            $("footer , header , section").addClass("wa-by-bigger-text-stap2");
        }
        if(Cookies.get("wbay_acc_data_bigger_text") == 'bigger text stap3' ) {
            $(".wbay-acc-bigger-text").addClass("stap1 stap2 stap3");
            $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap3' );                
            $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
            $("secfooter , header , sectiontion").addClass("wa-by-bigger-text-stap3");
        }
        if(Cookies.get("wbay_acc_data_bigger_text") == 'bigger text stap4' ) {
            $(".wbay-acc-bigger-text").addClass("stap1 stap2 stap3 stap4");
            $( '.wbay-acc-bigger-text' ).attr( 'data_wbay_acc_reader_content', 'bigger text stap4' );                
            $('.wbay-acc-bigger-text').closest(".wbay-acc-features_item").addClass("active");
            $("footer , header , section").addClass("wa-by-bigger-text-stap4");
        }

        //Pause Animations
        if(Cookies.get("wbay_acc_data_pause_animations") == 'pause animations stap1' ) {
            // $.cookie("wbay_acc_data_pause_animations", "pause animations stap1");
            $(".wbay-acc-pause-animations").addClass("stap1");
            $( '.wbay-acc-pause-animations' ).attr( 'data_wbay_acc_reader_content', 'pause animations stap1' );                
            $('.wbay-acc-pause-animations').closest(".wbay-acc-features_item").addClass("active");
            $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-2').removeClass("wbay-acc-d-none");
            $('.wbay-acc-pause-animations .wbay-acc-icon-pause-animations-1').addClass("wbay-acc-d-none");
            $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-2').removeClass("wbay-acc-d-none");
            $('.wbay-acc-pause-animations .wbay-acc-name-pause-animations-1').addClass("wbay-acc-d-none");
            wbay_acc_stop_videos();
        }

        //hide images 
        if(Cookies.get("wbay_acc_data_hide_images") == 'hide images stap1' ) {
            $(".wbay-acc-hide-images").addClass("stap1");
            $( '.wbay-acc-hide-images' ).attr( 'data_wbay_acc_reader_content', 'hide images stap1' );                
            $('.wbay-acc-hide-images').closest(".wbay-acc-features_item").addClass("active");
            $("body").addClass("wbay-acc-hide-images");
        }   

        //fyslexia friendly
        if(Cookies.get("wbay_acc_data_dyslexia_friendly") == 'fyslexia friendly stap1' ) {
            $(".wbay-acc-dyslexia-friendly").addClass("stap1");
            $( '.wbay-acc-dyslexia-friendly' ).attr( 'data_wbay_acc_reader_content', 'fyslexia friendly stap1' );                
            $('.wbay-acc-dyslexia-friendly').closest(".wbay-acc-features_item").addClass("active");                                
            $("body").addClass("wbay-acc-readabler-dyslexia-font");              
        }
        if(Cookies.get("wbay_acc_data_dyslexia_friendly") == 'fyslexia friendly stap2' ) {
            $(".wbay-acc-dyslexia-friendly").addClass("stap1 stap2");
            $( '.wbay-acc-dyslexia-friendly' ).attr( 'data_wbay_acc_reader_content', 'fyslexia friendly stap2' );                                
            $('.wbay-acc-dyslexia-friendly').closest(".wbay-acc-features_item").addClass("active");                                
            $('.wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-2 , .wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-2').removeClass("wbay-acc-d-none");
            $('.wbay-acc-dyslexia-friendly .wbay-acc-icon-dyslexia-friendly-1 , .wbay-acc-dyslexia-friendly .wbay-acc-name-dyslexia-friendly-1').addClass("wbay-acc-d-none");
            $("body").removeClass("wbay-acc-readabler-dyslexia-font");    
            $("body").addClass("wbay-acc-readabler-Arial-font");            
        }

        //Enhanced Cursor
        if(Cookies.get("wbay_acc_data_enhanced_cursor") == 'enhanced cursor stap1' ) {
            $(".wbay-acc-enhanced-cursor").addClass("stap1");
            $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor stap1' );                
            $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").addClass("active");                                
            $("body").addClass("wbay-acc-enhanced-cursor-stap1");
            $(".wbay-acc-name-enhanced-cursor-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-enhanced-cursor-01").removeClass("wbay-acc-d-none");
        }
        if(Cookies.get("wbay_acc_data_enhanced_cursor") == 'enhanced cursor stap2' ) {
            $(".wbay-acc-enhanced-cursor").addClass("stap1 stap2");
            $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor stap2' );                
            $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").addClass("active");                                
            $("body").addClass("wbay-acc-enhanced-cursor-stap2");
            $(".wbay-acc-icon-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-01").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-enhanced-cursor-2 , .wbay-acc-name-enhanced-cursor-2").removeClass("wbay-acc-d-none");            
            wbay_acc_reading_mask();
        }
        if(Cookies.get("wbay_acc_data_enhanced_cursor") == 'enhanced cursor stap3' ) {
            $(".wbay-acc-enhanced-cursor").addClass("stap1 stap2 stap3");
            $( '.wbay-acc-enhanced-cursor' ).attr( 'data_wbay_acc_reader_content', 'enhanced cursor stap3' );                
            $('.wbay-acc-enhanced-cursor').closest(".wbay-acc-features_item").addClass("active");                                
            $("body").addClass("wbay-acc-enhanced-cursor-stap3");
            $(".wbay-acc-icon-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-1 , .wbay-acc-name-enhanced-cursor-01 , .wbay-acc-icon-enhanced-cursor-2 , .wbay-acc-name-enhanced-cursor-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-enhanced-cursor-3 , .wbay-acc-name-enhanced-cursor-3").removeClass("wbay-acc-d-none");
            $('.enhanced_cursor_stap2').remove();                              
            wbay_acc_reading_guide();
        }

        //tooltips
        if(Cookies.get("wbay_acc_data_tooltips") == 'tooltips stap1' ) {
            $(".wbay-acc-tooltips").addClass("stap1");
            $( '.wbay-acc-tooltips' ).attr( 'data_wbay_acc_reader_content', 'tooltips stap1' );                
            $('.wbay-acc-tooltips').closest(".wbay-acc-features_item").addClass("active"); 
            wbay_acc_tooltips_show();
        }

        // Line Height
        if(Cookies.get("wbay_acc_data_line_height") == 'line height stap1' ) {
            $(".wbay-acc-line-height").addClass("stap1");
            $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height stap1' );                
            $('.wbay-acc-line-height').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-line-height-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-line-height-1").removeClass("wbay-acc-d-none");
            $("body").addClass("wbay_acc_data_line_height_stap1");
        }
        if(Cookies.get("wbay_acc_data_line_height") == 'line height stap2' ) {
            $(".wbay-acc-line-height").addClass("stap1 stap2");
            $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height stap2' );                
            $('.wbay-acc-line-height').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-line-height-0 , .wbay-acc-name-line-height-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-line-height-2").removeClass("wbay-acc-d-none");
            $("body").removeClass("wbay_acc_data_line_height_stap1");
            $("body").addClass("wbay_acc_data_line_height_stap2");
        }   
        if(Cookies.get("wbay_acc_data_line_height") == 'line height stap3' ) {
            $(".wbay-acc-line-height").addClass("stap1 stap2 stap3");
            $( '.wbay-acc-line-height' ).attr( 'data_wbay_acc_reader_content', 'line height stap3' );                
            $('.wbay-acc-line-height').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-line-height-0 , .wbay-acc-name-line-height-1 , .wbay-acc-name-line-height-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-line-height-3").removeClass("wbay-acc-d-none");
            $("body").removeClass("wbay_acc_data_line_height_stap2");
            $("body").addClass("wbay_acc_data_line_height_stap3");
        }   

        // Text Align
        if(Cookies.get("wbay_acc_data_text_align") == 'text align stap1' ) {
            $(".wbay-acc-text-align").addClass("stap1");
            $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap1' );                
            $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-1").removeClass("wbay-acc-d-none");                
            $("body").addClass("wbay-acc-text-align-stap1");
        }
        if(Cookies.get("wbay_acc_data_text_align") == 'text align stap2' ) {
            $(".wbay-acc-text-align").addClass("stap1 stap2");
            $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap2' );                
            $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-2").removeClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-2").removeClass("wbay-acc-d-none");
            $("body").removeClass("wbay-acc-text-align-stap1");            
            $("body").addClass("wbay-acc-text-align-stap2");
        }        
        if(Cookies.get("wbay_acc_data_text_align") == 'text align stap3' ) {
            $(".wbay-acc-text-align").addClass("stap1 stap2 stap3");
            $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap3' );                
            $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-3").removeClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-3").removeClass("wbay-acc-d-none");
            $("body").removeClass("wbay-acc-text-align-stap1");
            $("body").removeClass("wbay-acc-text-align-stap2");            
            $("body").addClass("wbay-acc-text-align-stap3"); 
        }        
        if(Cookies.get("wbay_acc_data_text_align") == 'text align stap4' ) {
            $(".wbay-acc-text-align").addClass("stap1 stap2 stap3 stap4");
            $( '.wbay-acc-text-align' ).attr( 'data_wbay_acc_reader_content', 'text align stap4' );                
            $('.wbay-acc-text-align').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-wbay-acc-text-align-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-wbay-acc-text-align-4").removeClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-icon-wbay-acc-text-align-4").removeClass("wbay-acc-d-none");
            $("body").removeClass("wbay-acc-text-align-stap1");
            $("body").removeClass("wbay-acc-text-align-stap2");            
            $("body").removeClass("wbay-acc-text-align-stap3");            
            $("body").addClass("wbay-acc-text-align-stap4");
        }

        // saturation
        if(Cookies.get("wbay_acc_data_saturation") == 'saturation stap1' ) {
            $(".wbay-acc-saturation").addClass("stap1");
            $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation stap1' );                
            $('.wbay-acc-saturation').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-saturation-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-1").removeClass("wbay-acc-d-none");
            $("html").addClass("wbay-acc-text-low-saturation");
        }
        if(Cookies.get("wbay_acc_data_saturation") == 'saturation stap2' ) {
            $(".wbay-acc-saturation").addClass("stap1 stap2");
            $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation stap2' );                
            $('.wbay-acc-saturation').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-saturation-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-2").removeClass("wbay-acc-d-none");
            $("html").addClass("wbay-acc-text-high-saturation");
        }
        if(Cookies.get("wbay_acc_data_saturation") == 'saturation stap3' ) {
            $(".wbay-acc-saturation").addClass("stap1 stap2 stap3");
            $( '.wbay-acc-saturation' ).attr( 'data_wbay_acc_reader_content', 'saturation stap3' );                
            $('.wbay-acc-saturation').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-name-saturation-0").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-saturation-3").removeClass("wbay-acc-d-none");
            $("html").addClass("wbay-acc-text-desaturate");
        }

        // Contrast
        if(Cookies.get("wbay_acc_data_contrast") == 'contrast stap1' ) {
            $(".wbay-acc-contrast").addClass("stap1");
            $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast stap1' );                
            $('.wbay-acc-contrast').closest(".wbay-acc-features_item").addClass("active");                 
            $(".wbay-acc-contrast-1, .wbay-acc-name-contrast-1").addClass("wbay-acc-d-none");                
            $(".wbay-acc-contrast-2, .wbay-acc-name-contrast-2").removeClass("wbay-acc-d-none");
            $("html").addClass("wbay-acc-contrast-stap1");
        }

        // Contrast
        if(Cookies.get("wbay_acc_data_contrast") == 'contrast stap2' ) {
            $(".wbay-acc-contrast").addClass("stap1 stap2");
            $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast stap2' );                
            $('.wbay-acc-contrast').closest(".wbay-acc-features_item").addClass("active"); 
            $(".wbay-acc-contrast-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-3").removeClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-3").removeClass("wbay-acc-d-none");
            $("html").removeClass("wbay-acc-contrast-stap1");
            $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").addClass("wbay-acc-contrast-stap2");
            $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap2");                
        }

        // Contrast
        if(Cookies.get("wbay_acc_data_contrast") == 'contrast stap3' ) {
            $(".wbay-acc-contrast").addClass("stap1 stap2 stap3");
            $( '.wbay-acc-contrast' ).attr( 'data_wbay_acc_reader_content', 'contrast stap3' );                
            $('.wbay-acc-contrast').closest(".wbay-acc-features_item").addClass("active");                 
            $(".wbay-acc-contrast-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-1").addClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-2").addClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-3").addClass("wbay-acc-d-none");
            $(".wbay-acc-contrast-4").removeClass("wbay-acc-d-none");
            $(".wbay-acc-name-contrast-4").removeClass("wbay-acc-d-none");
            $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").removeClass("wbay-acc-contrast-stap2");
            $("div, footer , header , section , h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button, a , button , ul ").addClass("wbay-acc-contrast-stap3");
            $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap2");
            $("#WbAyAccessibilityWrap div, #WbAyAccessibilityWrap footer, #WbAyAccessibilityWrap header, #WbAyAccessibilityWrap section, #WbAyAccessibilityWrap h1, #WbAyAccessibilityWrap h2, #WbAyAccessibilityWrap h3, #WbAyAccessibilityWrap h4, #WbAyAccessibilityWrap h5, #WbAyAccessibilityWrap h6, #WbAyAccessibilityWrap p, #WbAyAccessibilityWrap li, #WbAyAccessibilityWrap span, #WbAyAccessibilityWrap strong, #WbAyAccessibilityWrap em, #WbAyAccessibilityWrap abbr, #WbAyAccessibilityWrap acronym, #WbAyAccessibilityWrap address, #WbAyAccessibilityWrap bdo, #WbAyAccessibilityWrap blockquote, #WbAyAccessibilityWrap cite, #WbAyAccessibilityWrap q, #WbAyAccessibilityWrap code, #WbAyAccessibilityWrap ins, #WbAyAccessibilityWrap del, #WbAyAccessibilityWrap dfn, #WbAyAccessibilityWrap kbd, #WbAyAccessibilityWrap pre, #WbAyAccessibilityWrap samp, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap a, #WbAyAccessibilityWrap button, #WbAyAccessibilityWrap ul").removeClass("wbay-acc-contrast-stap3");
            $("#WbAyVoiceNavigationPopUp, #WbAyVoiceNavigationPopUp div, #WbAyVoiceNavigationPopUp footer, #WbAyVoiceNavigationPopUp header, #WbAyVoiceNavigationPopUp section, #WbAyVoiceNavigationPopUp h1, #WbAyVoiceNavigationPopUp h2, #WbAyVoiceNavigationPopUp h3, #WbAyVoiceNavigationPopUp h4, #WbAyVoiceNavigationPopUp h5, #WbAyVoiceNavigationPopUp h6, #WbAyVoiceNavigationPopUp p, #WbAyVoiceNavigationPopUp li, #WbAyVoiceNavigationPopUp span, #WbAyVoiceNavigationPopUp strong, #WbAyVoiceNavigationPopUp em, #WbAyVoiceNavigationPopUp abbr, #WbAyVoiceNavigationPopUp acronym, #WbAyVoiceNavigationPopUp address, #WbAyVoiceNavigationPopUp bdo, #WbAyVoiceNavigationPopUp blockquote, #WbAyVoiceNavigationPopUp cite, #WbAyVoiceNavigationPopUp q, #WbAyVoiceNavigationPopUp code, #WbAyVoiceNavigationPopUp ins, #WbAyVoiceNavigationPopUp del, #WbAyVoiceNavigationPopUp dfn, #WbAyVoiceNavigationPopUp kbd, #WbAyVoiceNavigationPopUp pre, #WbAyVoiceNavigationPopUp samp, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp a, #WbAyVoiceNavigationPopUp button, #WbAyVoiceNavigationPopUp ul").removeClass("wbay-acc-contrast-stap3");
        }

        // voice navigation
        if(Cookies.get("wbay_acc_data_voice_navigation") == 'voice navigation stap1' ) {
            $('.wbay-acc-voice-navigation').addClass("stap1");
            $( '.wbay-acc-voice-navigation' ).attr( 'data_wbay_acc_reader_content', 'voice navigation stap1' );                
            $('.wbay-acc-voice-navigation').closest(".wbay-acc-features_item").addClass("active");                        
            $('#WbAyVoiceNavigationPopUp').removeClass("wbay-acc-d-none");                
            $('#WbAyVoiceNavigationPopUp').addClass("wbay-acc-voice-navigation-pop-up-active");
            $('#wbay-acc-voice-navigation-record-button').click();
            $('body').addClass("wbay-acc-voice-navigation-stap1");
        }

    });

    const wbay_acc_stop_videos = () => {
        document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
        document.querySelectorAll('video').forEach(v => { v.pause() });        
        $('body').addClass("wbay-acc-stop-animations");        
    };

    const wbay_acc_play_videos = () => {
        document.querySelectorAll('iframe').forEach(v => { v.src = v.src });
        document.querySelectorAll('video').forEach(v => { v.play() });        
        $('body').removeClass("wbay-acc-stop-animations");        
    };

    function wbay_acc_reading_mask() {
        var e = document.body;
        e && (e.appendChild(top_block),
        e.appendChild(bottom_block),
        document.addEventListener("mousemove", wbay_acc_reading_mask_client))
    }

    function wbay_acc_reading_mask_client(e) {
        top_block.style.height = e.clientY - (document.querySelector("body"), 100) / 2 + "px",
        bottom_block.style.height = window.innerHeight - e.clientY - (document.querySelector("body"), 100) / 2 + "px";
    }

    function wbay_acc_reading_mask_div(e) {
        var t;
        t = document.createElement("div"),
        t.setAttribute('class', "enhanced_cursor_stap2"),

        t.style.cssText = "position: fixed !important; z-index: 2147483647 !important; width: 100% !important;background: rgba(0, 0, 0, 0.5) !important;";
        var n = document.createElement("div");
        return n.style.cssText = "width: 100% !important; height:" + 8 + "px !important; position:absolute !important;",
        "topBlock" === e ? (t.style.top = "0",
        n.style.background = "#2d68ff",
        n.style.bottom = "0") : "bottomBlock" === e && (t.style.bottom = "0",
        n.style.background = "#2d68ff",
        n.style.top = "0"),
        t.appendChild(n),
        t 
    }
    
    var top_block = wbay_acc_reading_mask_div("topBlock"), bottom_block = wbay_acc_reading_mask_div("bottomBlock");
    
    function wbay_acc_reading_guide() {
        $("body").append('<div id="wbay_acc_reading_guide_horizontal"></div>');

        $(document.body).on('mousemove', null, $('#wbay_acc_reading_guide_horizontal'),function(e){
            e.data.css('left', e.clientX);
            e.data.css('top', e.clientY - 25 + "px");
        });
    }
    
    function wbay_acc_tooltips_show() {

        $("h1, h2, h3, h4, h5, h6, p, li, span, strong, em, abbr, acronym, address, bdo, blockquote, cite, q , code , ins, del, dfn, kbd, pre, samp, a , button").each(function() {
            $(this).mouseenter(function(e) {

                var $wbay_acc_aria_label = $(this).attr("aria-label");
                var $wbay_acc_aria_labelledby = $(this).attr("aria-labelledby");

                if (($wbay_acc_aria_label) !== undefined)  {
                    $("#wbay_acc_reading_tooltips_show_html").html($wbay_acc_aria_label);
                    $("#wbay_acc_reading_tooltips_show_html").show();
                }
                if (($wbay_acc_aria_labelledby) !== undefined)  {
                    $("#wbay_acc_reading_tooltips_show_html").html($wbay_acc_aria_labelledby);
                    $("#wbay_acc_reading_tooltips_show_html").show();
                }

            }).mouseleave(function(e) {
                $("#wbay_acc_reading_tooltips_show_html").hide();
            });

        });
        wbay_acc_tooltips_show_html();
    }

    function wbay_acc_tooltips_show_html() {
        $("body").append('<div id="wbay_acc_reading_tooltips_show_html"></div>');

        $(document.body).on('mousemove', null, $('#wbay_acc_reading_tooltips_show_html'),function(e){
            e.data.css('left', e.clientX + 30 + "px");
            e.data.css('top', e.clientY + 30 + "px");
        });

        
    }    

})(jQuery); //jQuery main function ends strict Mode on