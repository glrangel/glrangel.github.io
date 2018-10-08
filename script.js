function scrollToID(tag){
    console.log(tag);
    var dest = $(tag).offset().top-37;
    $('body').animate({scrollTop: dest},1000);

}
