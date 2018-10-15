function scrollToID(tag){
    console.log(tag);
	document.getElementById(tag).scrollIntoView({ behavior: 'smooth', block: 'start' });
	slideout.toggle();
    // var dest = $(tag).offset().top-37;
    // console.log("dest: " + dest);
    // $('body').animate({scrollTop: dest},1000);
	// $('body').animate({
	//     scrollTop: $(tag).offset().top
	// }, 1000);
}
