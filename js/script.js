$(document).ready(function(){
	if (screen.width < 700) {
		console.log("mobile device detected!");
		document.location = "mobile.html";
	}
	if (jQuery) {  
    	console.log("jQuery Exists");
    }
    /* auto scroll to menu item location */
	$('a[href^="#"]').on('click', function(event) {
	    var target = $(this.getAttribute('href'));
	    console.log(target);
	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top - 50
	        }, 1000);
	    }
	});


/*
    $(window).scroll( function(){
           $('.hide').each( function(i){
            var objectBottom = $(this).offset().top + $(this).outerHeight() / 2;
            var windowBottom = $(window).scrollTop() + $(window).height();
            /* Object must be completely visible 
            if( windowBottom > objectBottom ){
                $(this).animate({'opacity':'1'},1500);
            } 
        }); 
    });
*/


});

function fade(){
	console.log("woop");
	$("#loading").fadeOut(1000);
	$("#title").addClass("load");
	$("#subtitle").addClass("load");
	$(".navbar").addClass("load");
	$('body').css('overflow','scroll');


	console.log($("#title").hasClass("load"));
}

