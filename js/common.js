
$(document).ready(function(){
	$("#humb").click(function(){
		$(".nav").toggleClass("active");
		$("#humb").toggleClass("rotate");
	});
	$('#slick-sliders').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear'
	});
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});	