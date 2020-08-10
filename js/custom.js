(function ($) {

	var slide_Index = 1;

showSlide(slide_Index);


	$(".back").click(function(){
		slide_Index=slide_Index-1;
		showSlide(slide_Index);
	});

	$(".next").click(function(){
		slide_Index=slide_Index+1;
		showSlide(slide_Index);
	});





$("#1").click(function(){

	showSlide(slide_Index = 1);
});

$("#2").click(function(){

	showSlide(slide_Index = 2);
});

$("#3").click(function(){

	showSlide(slide_Index = 3);
});

$("#4").click(function(){

	showSlide(slide_Index = 4);
});




function showSlide(n){
	

	
var i;

var slides = document.getElementsByClassName("myslides");

var dots = document.getElementsByClassName("dots");

if (n > slides.length) { slide_Index = 1}

if (n < 1) { slide_Index = slides.length}

for (i=0;i<slides.length;i++) {

slides[i].style.display = "none";

}

for (i=0;i<dots.length;i++) {

dots[i].className = dots[i].className.replace(" active","");

}

slides[slide_Index-1].style.display = "block";

dots[slide_Index-1].className += " active";

}

	new WOW().init();

	jQuery(window).load(function() { 
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");
	});

	
	//jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");	
		}
		
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		
		$('.navbar-nav li a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		
		$('.btn-circle-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		
	});

})(jQuery);
