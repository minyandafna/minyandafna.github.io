//var s = skrollr.init();

   	new cbpScroller( document.getElementById( 'cbp-so-scroller' ) );
    
    function parallax() {
    	var scrollPosition = $(window).scrollTop();
    	$('#parallax').css('top',(0 - (scrollPosition * 0.3))+'px' ); // bg image moves at 30% of scrolling speed
    	$('.jumbotron').css('background-position-y',(0 - (scrollPosition * 0.3))+'px' ); // bg moves at 30% of scrolling speed

    	$('#contact').css('background-position-y',(570 - (scrollPosition * 0.3))+'px' ); // bg moves at 30% of scrolling speed

    }
    
    $(document).ready(function() {
    	$('.navbar-brand').addClass("navbar-light");
    	$('.navbar .nav > li > a').addClass("navbar-light");
    
    	/* ========== PARALLAX BACKGROUND ========== */
    
    	$(window).on('scroll', function(e) {
    		parallax();
    		
    		        if($(this).scrollTop() > 460)
    		        {   
    		            $('.navbar-default').css({"background":"#ECEEF0",});
    		            $('.navbar-brand').removeClass("navbar-light");
    		            $('.navbar .nav > li > a').removeClass("navbar-light");

						    		            
    		           
    		        }
    		        if($(this).scrollTop() < 460)
    		        {   
    		            $('.navbar-default').css({"background":"transparent"});
    		            $('.navbar-brand').addClass("navbar-light");
    		            $('.navbar .nav > li > a').addClass("navbar-light");
    		            
//    		            $('.navbar-brand').css({"color":"#fff",});
//    		            $('.navbar .nav > li > a').css({"color":"#efefef",});


    		        }
    		
    	});
    	
    	
    
//    
//    $(document).scroll(function(){
//        if($(this).scrollTop() > 70)
//        {   
//            $('.navbar-default').css({"background":"#ECEEF0"});
//        }
//        if($(this).scrollTop() < 70)
//        {   
//            $('.navbar-default').css({"background":"transparent"});
//        }
    });
