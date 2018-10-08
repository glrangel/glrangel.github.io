function scrollToID(tag){
    console.log(tag);
    //close mobile  menu if open
    if($(".menu").is(':visible')){
        $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    }

    var dest = $(tag).offset().top-37;
    $('html').animate({scrollTop: dest},1000);

}
