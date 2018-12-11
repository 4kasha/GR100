
$(function(){
	var CHANGE_TIME  = 3000;
	var ANIMATE_TIME = 1000;
	var images =  '../img/top_GR.png'

	function fade_image() {
		$("img.active").animate({'opacity': 0}, ANIMATE_TIME, "linear", function(){
			$('img:not(".active")').addClass('active');
			$(this).attr('src', images[index % images.length]).removeClass('active');
		});
		$('img:not(".active")').animate({'opacity': 1.0}, ANIMATE_TIME);
		setTimeout(fade_image, CHANGE_TIME);
	}
	$("body")
		.append($("<img>").attr("src", images).addClass("active"))
		.append($("<img>").attr("src", images).css({'opacity': 0}));
	setTimeout(fade_image, CHANGE_TIME);
});