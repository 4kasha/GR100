$(function () {

	$('#wrapper').fadeIn(2000);

	$('a.scroll').click(function(){
		var speed = 900;
		var href= $(this).attr("href");
		var target = $(href === "#" || href === "" ? 'html' : href);
		var position = target.offset().top;
		$('body, html').animate({scrollTop:position}, speed, "swing");
		return false;
	});

    $(".slide_btn").click(function(){
		$(this).parent().prev().slideToggle(500);
		$(this).toggleClass("active");
		return false;
    });

});
