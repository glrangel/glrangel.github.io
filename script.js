$(document).ready( function() {

    var screenOffset = 100;
    $( ".cross" ).hide();
    $( ".menu" ).hide();

    if($(window).width() <= 750){
        $( ".hamburger" ).show();
        screenOffset = 500;
    }
    else
        $( ".hamburger" ).hide();

    var topOfOthDiv = $("#about").offset().top;

  //   $('#content').scroll(function() {
  //       if($('#content').scrollTop() >= (topOfOthDiv - screenOffset) ) { //scrolled past the other div?
  //           if($(window).width() <= 750){ //ismobile
  //               console.log("WOOOP it small");
  //               $('.content-body').css({"transform":"translateX(0%)"});
  //               $('.content-body').css({"width":"auto"});

  //           }
  //           else //isdesktop
  //           {
  //               $('#navbar').css({"transform":"translateX(0%)"});
  //               $('.content-body').css({"transform":"translateX(27%)"});
  //               $('.content-body').css({"width":"69%"});

  //           }
  //       }
  //       else{
  //           $('#navbar').css({"transform":"translateX(-101%)"});
  //           $('.content-body').css({"transform":"translateX(-110%)"});

		// }
  //   });

    //Mobile Menu Functions
    $( ".hamburger" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

});

$(window).resize(function() {
    if($(window).width() <= 750){
        $( ".hamburger" ).show();
        // $('#navbar').css({"transform":"translateX(-101%)"});
    }
    else
        $( ".hamburger" ).hide();
});

function scrollToID(tag){
    console.log(tag);
    //close mobile  menu if open
    if($(".menu").is(':visible')){
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    }

    var scrollAmount = 0;
    var dest = $(tag).offset().top;
    var currLoc = $('#section-container').scrollTop();
    console.log(currLoc);
    // console.log($('body').scrollTop();
    var padding = 0;

    if(dest > currLoc)
        scrollAmount = dest + currLoc;
    if(dest < currLoc)
        scrollAmount = currLoc + dest;


    $('#section-container').animate({scrollTop: scrollAmount+padding},1000);
}
