// JavaScript Document
(function($) {
  "use strict";

    // wa-by-voice-navigation-po-up-close-button
    $("#wa-by-voice-navigation-po-up-close-button").on( 'click' , function() {

        var $data_wbay_acc_reader_content = $('.wbay-acc-voice-navigation').attr("data_wbay_acc_reader_content");

        if( $data_wbay_acc_reader_content == 'voice navigation' ) {
            
            Cookies.set('wbay_acc_data_voice_navigation', 'voice navigation stap1', { path: '/' });
            $('.wbay-acc-voice-navigation').addClass("stap1");
            $( '.wbay-acc-voice-navigation' ).attr( 'data_wbay_acc_reader_content', 'voice navigation stap1' );                
            $('.wbay-acc-voice-navigation').closest(".wbay-acc-features_item").addClass("active");                        
            $('#WbAyVoiceNavigationPopUp').removeClass("wbay-acc-d-none");                
            $('#WbAyVoiceNavigationPopUp').addClass("wbay-acc-voice-navigation-pop-up-active");
            $('#wbay-acc-voice-navigation-record-button').click();              
        }

        if( $data_wbay_acc_reader_content == 'voice navigation stap1' ) {                
            Cookies.remove('wbay_acc_data_voice_navigation', { path: '/' });
            $('.wbay-acc-voice-navigation').removeClass("stap1");
            $( '.wbay-acc-voice-navigation').attr( 'data_wbay_acc_reader_content', 'voice navigation' );                
            $('.wbay-acc-voice-navigation').closest(".wbay-acc-features_item").removeClass("active");
            $('#WbAyVoiceNavigationPopUp').addClass("wbay-acc-d-none");
            $('#WbAyVoiceNavigationPopUp').removeClass("wbay-acc-voice-navigation-pop-up-active");
            $('#wbay-acc-voice-navigation-record-button').click();
        }
                
    });

    //wa-by-voice-navigation-po-up-body-close-button
    $("#wa-by-voice-navigation-po-up-body-close-button").on( 'click' , function() {
        
        var $wbay_acc_data_command = $('.wbay-acc-voice-navigation-pop-up-body').attr("wbay_acc_data_command");

        if( $wbay_acc_data_command == 'wbay-acc-voice-navigation-body-hide' ) {                    
            $( '.wbay-acc-voice-navigation-pop-up-body' ).attr( 'wbay_acc_data_command', 'wbay-acc-voice-navigation-body-show' );
            $(".wbay-acc-voice-navigation-pop-up-body").removeClass("wbay-acc-d-none");
            $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-plus-solid").addClass("wbay-acc-d-none");
            $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-minus-solid").removeClass("wbay-acc-d-none");
        }

        if( $wbay_acc_data_command == 'wbay-acc-voice-navigation-body-show' ) {                    
            $( '.wbay-acc-voice-navigation-pop-up-body' ).attr( 'wbay_acc_data_command', 'wbay-acc-voice-navigation-body-hide' );
            $(".wbay-acc-voice-navigation-pop-up-body").addClass("wbay-acc-d-none");
            $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-plus-solid").removeClass("wbay-acc-d-none");
            $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-minus-solid").addClass("wbay-acc-d-none");
        }    

    });
    
    // wbay-acc-voice-navigation-record-button        
    $("#wbay-acc-voice-navigation-record-button").on( 'click' , function() {
        
        var $wbay_acc_data_command = $(this).attr("wbay_acc_data_command");

        if( $wbay_acc_data_command == 'voice navigation' ) {                    
            wbay_acc_voice_navigation_start();
            $(".wa-by-play-solid").addClass("wbay-acc-d-none");
            $(".wa-by-pause-solid").removeClass("wbay-acc-d-none");
            $( '#wbay-acc-voice-navigation-record-button' ).attr( 'wbay_acc_data_command', 'voice navigation start' );
        }

        if( $wbay_acc_data_command == 'voice navigation start' ) {
            wbay_acc_voice_navigation_stop();
            $(".wa-by-play-solid").removeClass("wbay-acc-d-none");
            $(".wa-by-pause-solid").addClass("wbay-acc-d-none");
            $( '#wbay-acc-voice-navigation-record-button' ).attr( 'wbay_acc_data_command', 'voice navigation' );
        }

    });

    // wbay-acc-voice-navigation-command-button      
    $(".wbay-acc-voice-navigation-command-button").on( 'click' , function() {
        
        var $wbay_acc_data_command = $(this).attr("wbay_acc_data_command");

        if (( $wbay_acc_data_command == 'Help') || ($wbay_acc_data_command == 'Help me') || ($wbay_acc_data_command == 'Show commands') ) {  
            wbay_acc_help();
        } else if (( $wbay_acc_data_command == 'Hide help') || ($wbay_acc_data_command == 'Hide commands') || ($wbay_acc_data_command == 'Hide commands list') ) {  
            wbay_acc_hide_help();
        } else if (( $wbay_acc_data_command == 'Scroll down') || ($wbay_acc_data_command == 'Page Down') || ($wbay_acc_data_command == 'Down') ) {  
            wbay_acc_scroll_down();
        } else if (( $wbay_acc_data_command == 'Up') || ($wbay_acc_data_command == 'Scroll up') || ($wbay_acc_data_command == 'Page Up') ) {  
            wbay_acc_scroll_up();
        } else if (( $wbay_acc_data_command == 'Page Top') || ($wbay_acc_data_command == 'Top') || ($wbay_acc_data_command == 'Go to top') ) {  
            wbay_acc_go_to_top();
        } else if (( $wbay_acc_data_command == 'Go to bottom') || ($wbay_acc_data_command == 'Bottom') || ($wbay_acc_data_command == 'Page Bottom') ) {  
            wbay_acc_go_to_bottom();
        } else if (( $wbay_acc_data_command == 'Tab') || ($wbay_acc_data_command == 'Next') || ($wbay_acc_data_command == 'Next Tab') ) {  
            wbay_acc_tab();
        } else if (( $wbay_acc_data_command == 'Tab back') || ($wbay_acc_data_command == 'Previous') || ($wbay_acc_data_command == 'Previous Tab') ) {  
            wbay_acc_tab_back();
        } else if (( $wbay_acc_data_command == 'Clear input') || ($wbay_acc_data_command == 'Clear') || ($wbay_acc_data_command == 'Remove') ) {  
            wbay_acc_clear_input();
        } else if (( $wbay_acc_data_command == 'Enter') || ($wbay_acc_data_command == 'Submit') || ($wbay_acc_data_command == 'Ok') ) {  
            wbay_acc_submit_form();
        } else if (( $wbay_acc_data_command == 'Reload') || ($wbay_acc_data_command == 'Update') || ($wbay_acc_data_command == 'Refresh') ) {  
            wbay_acc_reload();
        } else if (( $wbay_acc_data_command == 'Stop') || ($wbay_acc_data_command == 'Cancel') || ($wbay_acc_data_command == 'Stop listening') ) {  
            wbay_acc_stop();
        } else if (( $wbay_acc_data_command == 'Exit') || ($wbay_acc_data_command == 'Quit') || ($wbay_acc_data_command == 'Close') ) {  
            wbay_acc_exit();
        } else if (( $wbay_acc_data_command == 'show numbers') || ($wbay_acc_data_command == 'Display numbers') || ($wbay_acc_data_command == 'Enable numbers') ) {  
            wbay_acc_show_numbers();
            Cookies.set("wbay_acc_data_show_numbers", "wbay_acc_show_numbers" , { path: '/' });
        } else if (( $wbay_acc_data_command == 'hide numbers') || ($wbay_acc_data_command == 'disable numbers') || ($wbay_acc_data_command == 'remove numbers') ) {  
            $(".wbay-acc-accessibility-voice-number").remove();
            wbay_acc_tippycreate = false;
            Cookies.remove('wbay_acc_data_show_numbers', { path: '/' });
        }

    });

    var SpeechRecognitionss = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition ;

    const wbay_acc_isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

    if (wbay_acc_isFirefox) {
        var recognition = '';
    } else {
        var recognition = new SpeechRecognitionss();
        recognition.continuous = false;
        recognition.interimResults = true;
    }

    var wbay_acc_interval;

    function wbay_acc_voice_navigation_start() {
        recognition.stop();
        recognition.start();
            
        var $wbay_acc_voiceRecognitionStart        = $('input#wbay_acc_voiceRecognitionStart').val();
        var $wbay_acc_voiceRecognitionStartHelp    = $('input#wbay_acc_voiceRecognitionStartHelp').val();
        var $wbay_acc_data_command                 = $('.wbay-acc-voice-navigation-pop-up-body').attr("wbay_acc_data_command");

        if( $wbay_acc_data_command == 'wbay-acc-voice-navigation-body-hide' ) {
            $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_voiceRecognitionStart + $wbay_acc_voiceRecognitionStartHelp); 
            // wbay_acc_voice_navigation_speak($wbay_acc_voiceRecognitionStart);
        } else {
            $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_voiceRecognitionStart); 
            // wbay_acc_voice_navigation_speak($wbay_acc_voiceRecognitionStart);
        }

        recognition.onresult = function(event) {
            // console.log('chatting');                            
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    var $wbay_acc_res = event.results[i][0].transcript.toLowerCase().trim();
                    
                    // console.log($wbay_acc_res); // what was said

                    $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_res);

                    if (($wbay_acc_res === 'help') || ($wbay_acc_res === 'help.') || ($wbay_acc_res === 'help me') || ($wbay_acc_res === 'help me.') || ($wbay_acc_res === 'show commands') || ($wbay_acc_res === 'show_commands.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_help();
                    } else if (($wbay_acc_res === 'hide help') || ($wbay_acc_res === 'hide commands') || ($wbay_acc_res === 'hide commands list') ||
                        ($wbay_acc_res === 'hide help.') || ($wbay_acc_res === 'hide commands.') || ($wbay_acc_res === 'hide commands list.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_hide_help();
                    } else if (($wbay_acc_res === 'scroll down') || ($wbay_acc_res === 'page down') || ($wbay_acc_res === 'down') ||
                        ($wbay_acc_res === 'scroll down.') || ($wbay_acc_res === 'page down.') || ($wbay_acc_res === 'down.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_scroll_down();
                    } else if (($wbay_acc_res === 'up') || ($wbay_acc_res === 'scroll up') || ($wbay_acc_res === 'page Up') ||
                        ($wbay_acc_res === 'up.') || ($wbay_acc_res === 'scroll up.') || ($wbay_acc_res === 'page Up.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_scroll_up();
                    } else if (($wbay_acc_res === 'page top') || ($wbay_acc_res === 'top') || ($wbay_acc_res === 'go to top') ||
                        ($wbay_acc_res === 'page top.') || ($wbay_acc_res === 'top.') || ($wbay_acc_res === 'go to top.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_go_to_top();
                    } else if (($wbay_acc_res === 'go to bottom') || ($wbay_acc_res === 'bottom') || ($wbay_acc_res === 'page bottom') ||
                        ($wbay_acc_res === 'go to bottom.') || ($wbay_acc_res === 'bottom.') || ($wbay_acc_res === 'page bottom.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_go_to_bottom();
                    } else if (($wbay_acc_res === 'tab') || ($wbay_acc_res === 'next') || ($wbay_acc_res === 'next tab') ||
                        ($wbay_acc_res === 'tab.') || ($wbay_acc_res === 'next.') || ($wbay_acc_res === 'next tab.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_tab();
                    } else if (($wbay_acc_res === 'tab back') || ($wbay_acc_res === 'previous') || ($wbay_acc_res === 'previous tab') ||
                        ($wbay_acc_res === 'tab back.') || ($wbay_acc_res === 'previous.') || ($wbay_acc_res === 'previous tab.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_tab_back();
                    } else if (($wbay_acc_res === 'clear input') || ($wbay_acc_res === 'clear') || ($wbay_acc_res === 'remove') ||
                        ($wbay_acc_res === 'clear input.') || ($wbay_acc_res === 'clear.') || ($wbay_acc_res === 'remove.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_clear_input();
                    } else if (($wbay_acc_res === 'enter') || ($wbay_acc_res === 'submit') || ($wbay_acc_res === 'ok') ||
                       ($wbay_acc_res === 'enter.') || ($wbay_acc_res === 'submit.') || ($wbay_acc_res === 'ok.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_clear_input();
                    } else if (($wbay_acc_res === 'reload') || ($wbay_acc_res === 'update') || ($wbay_acc_res === 'refresh') ||
                       ($wbay_acc_res === 'reload.') || ($wbay_acc_res === 'update.') || ($wbay_acc_res === 'refresh.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_reload();
                    } else if (($wbay_acc_res === 'stop') || ($wbay_acc_res === 'cancel') || ($wbay_acc_res === 'stop listening') ||
                       ($wbay_acc_res === 'stop.') || ($wbay_acc_res === 'cancel.') || ($wbay_acc_res === 'stop listening.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_stop();
                    } else if (($wbay_acc_res === 'exit') || ($wbay_acc_res === 'quit') || ($wbay_acc_res === 'close') ||
                       ($wbay_acc_res === 'exit.') || ($wbay_acc_res === 'quit.') || ($wbay_acc_res === 'close.')) {
                        wbay_acc_voice_navigation_speak($wbay_acc_res);
                        wbay_acc_exit();
                    } else if (($wbay_acc_res === 'Show numbers') || ($wbay_acc_res === 'Display numbers') || ($wbay_acc_res === 'Enable numbers') ||
                       ($wbay_acc_res === 'Show numbers.') || ($wbay_acc_res === 'Display numbers.') || ($wbay_acc_res === 'Enable numbers.')) {
                        wbay_acc_show_numbers();
                        Cookies.set("wbay_acc_data_show_numbers", "wbay_acc_show_numbers" , { path: '/' });
                    }
                    
                    // console.log('going');
                    wbay_acc_interval = setInterval(wbay_acc_getRid, 500);
                }        
            }

        };

        recognition.onspeechend = () => {
            recognition.stop();
        };

    }

    if (wbay_acc_isFirefox) {
    } else {
        recognition.onerror = (event) => {

            if (event.error === 'no-speech') {
                var $wbay_acc_voiceRecognitionErrorNoVoice = $('input#wbay_acc_voiceRecognitionErrorNoVoice').val();
                $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_voiceRecognitionErrorNoVoice);
                wbay_acc_interval = setInterval(wbay_acc_getRid, 1000);
     
            } else if (event.error === 'network') {
                var $wbay_acc_voiceRecognitionErrorNoNetwork = $('input#wbay_acc_voiceRecognitionErrorNoNetwork').val();
                $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_voiceRecognitionErrorNoNetwork);            
            } else if (event.error === 'not-allowed') {
                var $wbay_acc_voiceRecognitionErrorNotAllowed = $('input#wbay_acc_voiceRecognitionErrorNotAllowed').val();
                $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_voiceRecognitionErrorNotAllowed);            
            } else {
                var $wbay_acc_voiceRecognitionErrorUnknown = $('input#wbay_acc_voiceRecognitionErrorUnknown').val();
                $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_voiceRecognitionErrorUnknown);           
                wbay_acc_voice_navigation_start();
            }
            
        };
    }

    function wbay_acc_getRid() {
        clearInterval(wbay_acc_interval);
        wbay_acc_voice_navigation_start();
        // console.log('gone');
    }

    function wbay_acc_voice_navigation_stop() {
        recognition.stop();
        var $wbay_acc_voiceRecognitionEnd = $('input#wbay_acc_voiceRecognitionEnd').val();
        $('#wa-by-voice-navigation-input').attr('value', $wbay_acc_voiceRecognitionEnd); 
        wbay_acc_voice_navigation_speak($wbay_acc_voiceRecognitionEnd);
    }

    // talkback
    function wbay_acc_voice_navigation_speak(text) {
        var msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.volume = 1;
        msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "Fred"; })[0];
        window.speechSynthesis.speak(msg);
    }

    $(window).load(function() {
        // voice navigation
        if(Cookies.get("wbay_acc_data_show_numbers") == 'wbay_acc_show_numbers' ) {
            wbay_acc_show_numbers();
        }
    });
    // voice_navigation tabs function

    function wbay_acc_help () {
        var $wbay_acc_data_command = $('.wbay-acc-voice-navigation-pop-up-body').attr("wbay_acc_data_command");
        if( $wbay_acc_data_command == 'wbay-acc-voice-navigation-body-hide' ) {                    
            $( '.wbay-acc-voice-navigation-pop-up-body' ).attr( 'wbay_acc_data_command', 'wbay-acc-voice-navigation-body-show' );
            $(".wbay-acc-voice-navigation-pop-up-body").removeClass("wbay-acc-d-none");
            $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-plus-solid").addClass("wbay-acc-d-none");
            $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-minus-solid").removeClass("wbay-acc-d-none");
        }
    }

    function wbay_acc_hide_help () {
        $( '.wbay-acc-voice-navigation-pop-up-body' ).attr( 'wbay_acc_data_command', 'wbay-acc-voice-navigation-body-hide' );
        $(".wbay-acc-voice-navigation-pop-up-body").addClass("wbay-acc-d-none");
        $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-plus-solid").removeClass("wbay-acc-d-none");
        $("#wa-by-voice-navigation-po-up-body-close-button .wa-by-minus-solid").addClass("wbay-acc-d-none");
    }

    function wbay_acc_scroll_down () {        
        window.scrollBy({
            top: 200,
            behavior : "smooth"
        })
    }

    function wbay_acc_scroll_up () {        
        window.scrollBy({
            top: -200,
            behavior : "smooth"
        })
    }

    function wbay_acc_go_to_top () {        
        window.scrollTo({
            top: 0,
            behavior : "smooth"
        })
    }

    function wbay_acc_go_to_bottom () {        
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior : "smooth"
        })
    }

    function wbay_acc_tab () {        
        const wbay_acc_get_tab = document.querySelectorAll(' input:not([disabled]), a[href], area[href], select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')
          , wbay_acc_list_tab = Array.from(wbay_acc_get_tab).filter((wbay_acc_get_tab=>!wbay_acc_get_tab.disabled && !wbay_acc_get_tab.hidden))
          , wbay_acc_the_tab = document.activeElement;
        if (wbay_acc_the_tab) {
            wbay_acc_list_tab[(Array.from(wbay_acc_list_tab).indexOf(wbay_acc_the_tab) + 1) % wbay_acc_list_tab.length].focus();
        } else {
            wbay_acc_list_tab[0].focus();
        }
    }

    function wbay_acc_tab_back () { 
        const wbay_acc_get_tab = document.querySelectorAll(' input:not([disabled]), a[href], area[href], select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]')
          , wbay_acc_list_tab = Array.from(wbay_acc_get_tab).filter((wbay_acc_get_tab=>!wbay_acc_get_tab.disabled && !wbay_acc_get_tab.hidden))
          , wbay_acc_the_tab = document.activeElement;
        if (wbay_acc_the_tab) {
            wbay_acc_list_tab[(Array.from(wbay_acc_list_tab).indexOf(wbay_acc_the_tab) - 1) % wbay_acc_list_tab.length].focus();
        } else {
            wbay_acc_list_tab[0].focus();
        }
    }

    function wbay_acc_clear_input () {
        const clear_input = document.activeElement;
        "INPUT" !== clear_input.tagName && "TEXTAREA" !== clear_input.tagName || (clear_input.value = "")
    }

    function wbay_acc_submit_form () {
        const submit_form = document.activeElement;
        "FORM" === submit_form.tagName ? submit_form.submit() : submit_form.click() || "FORM" === $('input[type="submit"]').click();
    }

    function wbay_acc_reload () {
        window.location.reload()         
    }

    function wbay_acc_stop () {
        wbay_acc_voice_navigation_stop();
        $(".wa-by-play-solid").removeClass("wbay-acc-d-none");
        $(".wa-by-pause-solid").addClass("wbay-acc-d-none");
        $( '#wbay-acc-voice-navigation-record-button' ).attr( 'wbay_acc_data_command', 'voice navigation' );
    }

    function wbay_acc_exit () {
        $('#wa-by-voice-navigation-po-up-close-button').click();
    }

    var wbay_acc_tippycreate = false;

    function wbay_acc_show_numbers() {
        const e = document.querySelectorAll("a, button, input, select, textarea");

        var c = document.querySelectorAll("[wbay-acc-data-accessibilit-number]");

        if (!e)
            return;
        let t = 1;

        if (wbay_acc_tippycreate === false) {
            
            e.forEach((e=>{
                var box;
                box = document.createElement("div");                
                box.setAttribute("role", 'tooltip'),
                box.classList.add("wbay-acc-accessibility-voice-number"),
                e.closest("#WbAyVoiceNavigationPopUp") || e.closest("#WbAyAccessibilityWrap") || (e.setAttribute("wbay-acc-data-accessibilit-number", t.toString()),
                e.setAttribute("wbay-acc-data-tippy-content", 'tippy-'+t.toString()),
                e.setAttribute("wbay-acc-aria-describedby", 'tooltip'),
                // box.style.display = "none",
                box.setAttribute("id", 'tippy-'+t.toString()),
                box.innerHTML = t,
                e.appendChild(box), 
                t++)
            }
            ));

            wbay_acc_tippycreate = true;
        }

    }
    
    function wbay_acc_text_to_speech(wbay_acc_text_to_speech_inet) {

        function wbay_acc_getSelectionText() {
            
            var wbay_acc_text = "";
            
            var wbay_acc_activeEl = document.activeElement;
            var wbay_acc_activeElTagName = wbay_acc_activeEl ? wbay_acc_activeEl.tagName.toLowerCase() : null;
            if ( (wbay_acc_activeElTagName == "textarea") || (wbay_acc_activeElTagName == "input" && /^(?:text|search|password|tel|url)$/i.test(wbay_acc_activeEl.type)) && (typeof wbay_acc_activeEl.selectionStart == "number") ) {
                wbay_acc_text = wbay_acc_activeEl.value.slice(wbay_acc_activeEl.selectionStart, wbay_acc_activeEl.selectionEnd);
                return wbay_acc_text;
            } else if (window.getSelection) {
                wbay_acc_text = window.getSelection().toString();
                return wbay_acc_text;
            }
        }
        document.onmouseup = function() {
            if (wbay_acc_text_to_speech_inet == true) {
                wbay_acc_voice_navigation_speak(wbay_acc_getSelectionText());
                if (window.getSelection) window.getSelection().removeAllRanges();
                else if (document.selection) document.selection.empty();
            }
        };



    }

    
    $(document).ready(function(){
        
        var wbay_acc_text_to_speech_inet = false;

        $(".wbay-acc-text-to-speech").on( 'click' , function() {
            
            var $data_wbay_acc_reader_content = $(this).attr("data_wbay_acc_reader_content");

            if( $data_wbay_acc_reader_content == 'text to speech' ) {           
                Cookies.set('wbay_acc_data_text_to_speech', 'text to speech stap1', { path: '/' });
                $('.wbay-acc-text-to-speech').addClass("stap1");
                $( '.wbay-acc-text-to-speech' ).attr( 'data_wbay_acc_reader_content', 'text to speech stap1' );                
                $('.wbay-acc-text-to-speech').closest(".wbay-acc-features_item").addClass("active");      
                wbay_acc_text_to_speech_inet = true;
                wbay_acc_text_to_speech(wbay_acc_text_to_speech_inet);
            }

            if( $data_wbay_acc_reader_content == 'text to speech stap1' ) {           
                Cookies.remove('wbay_acc_data_text_to_speech', { path: '/' });
                $('.wbay-acc-text-to-speech').removeClass("stap1");
                $( '.wbay-acc-text-to-speech' ).attr( 'data_wbay_acc_reader_content', 'text to speech' );                
                $('.wbay-acc-text-to-speech').closest(".wbay-acc-features_item").removeClass("active");            
                wbay_acc_text_to_speech_inet = false;
                wbay_acc_text_to_speech(wbay_acc_text_to_speech_inet);
            }

        });

        // Reset Button Remove Cookie
        $("#WbAyBtnResetWidget").on( 'click' , function() {

            $(".wbay-acc-accessibility-voice-number").remove();
            wbay_acc_tippycreate = false;
            Cookies.remove('wbay_acc_data_show_numbers', { path: '/' });

            Cookies.remove('wbay_acc_data_text_to_speech', { path: '/' });
            $('.wbay-acc-text-to-speech').removeClass("stap1");
            $( '.wbay-acc-text-to-speech' ).attr( 'data_wbay_acc_reader_content', 'text to speech' );                
            $('.wbay-acc-text-to-speech').closest(".wbay-acc-features_item").removeClass("active");            
            wbay_acc_text_to_speech_inet = false;
            wbay_acc_text_to_speech(wbay_acc_text_to_speech_inet);


        });
    });

    $(window).load(function() {

        if(Cookies.get("wbay_acc_data_text_to_speech") == 'text to speech stap1' ) {
            $('.wbay-acc-text-to-speech').addClass("stap1");
            $( '.wbay-acc-text-to-speech' ).attr( 'data_wbay_acc_reader_content', 'text to speech stap1' );                
            $('.wbay-acc-text-to-speech').closest(".wbay-acc-features_item").addClass("active");               
            var wbay_acc_text_to_speech_inet = true;
            wbay_acc_text_to_speech(wbay_acc_text_to_speech_inet);
        }
    });
    
})(jQuery); //jQuery main function ends strict Mode on