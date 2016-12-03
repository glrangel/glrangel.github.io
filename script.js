$(document).ready(function(){
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
	            scrollTop: target.offset().top -50
	        }, 1000);
	    }
	});



});
// $(window).onload = function()
// {
// }
function fade(){
	console.log("woop");
			$("#lol").fadeOut(1000);

	$("#title").addClass("load");
	$("#subtitle").addClass("load");
	$(".navbar").addClass("load");


	console.log($("#title").hasClass("load"));
}