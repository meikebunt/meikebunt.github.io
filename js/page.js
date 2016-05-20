$(window).on("load", function() {
$('.thumbnail img').each(function() {
	var logoHeight = $(this).height();
	console.log($(this).height());
	console.log($(this).width());
    if ($(this).height() < 127) {
    	console.log("Soooo small!!!!");
        $(this).css('height', "127px");
    }
});
});