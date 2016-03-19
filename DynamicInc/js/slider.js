// JavaScript Document

var timer;
var slides = 7;
var timeLen = 5000;
function nextSlide(){
	clearTimeout(timer);
	var current = parseInt($("#counter").html());
	if(current < slides) {
		var nextSlide = current + 1;
	} else {
		var nextSlide = 1;
	}
	//Set rear image to next slide(still not visible)
	$("#slide_back img").attr("src","images/slide_" + nextSlide + ".jpg");
	//Hide front image
	$("#slide_front").stop(true,true );
	$("#slide_front").animate({opacity: "0"}, 700, "linear", function(){
		//Change the front img src
		$("#slide_front img").attr("src","images/slide_" + nextSlide + ".jpg");
		//Display front image
		$("#slide_front").css("opacity", "1");
		//Update counter
		$("#counter").html(nextSlide);
		//Change jumpers
		$("#jumpers li.current").removeAttr("class");
		$("#jumpers #" + nextSlide).attr("class","current");
		//Set timer
		timer = setTimeout("nextSlide()",timeLen );
	});
}
function prevSlide(){
	clearTimeout(timer);
	var current = parseInt($("#counter").html());
	if(current == 1) {
		var nextSlide = slides;
	} else {
		var nextSlide = current - 1;
	}
	//Set rear image to next slide(still not visible)
	$("#slide_back img").attr("src","images/slide_" + nextSlide + ".jpg");
	//Hide front image
	$("#slide_front").stop(true,true );
	$("#slide_front").animate({opacity: "0"}, 700, "linear", function(){
		//Change the front img src
		$("#slide_front img").attr("src","images/slide_" + nextSlide + ".jpg");
		//Display front image
		$("#slide_front").css("opacity", "1");
		//Update counter
		$("#counter").html(nextSlide);
		//Change jumpers
		$("#jumpers li.current").removeAttr("class");
		$("#jumpers #" + nextSlide).attr("class","current");
		//Set timer
		timer = setTimeout("nextSlide()",timeLen );
	});
}
function jump(slide) {
	clearTimeout(timer);
	//Set rear image to next slide(still not visible)
	$("#slide_back img").attr("src","images/slide_" + slide + ".jpg");
	//Hide front image
	$("#slide_front").stop(true,true );
	$("#slide_front").animate({opacity: "0"}, 700, "linear", function(){
		//Change the front img src
		$("#slide_front img").attr("src","images/slide_" + slide + ".jpg");
		//Display front image
		$("#slide_front").css("opacity", "1");
		//Update counter
		$("#counter").html(slide);
		//Change jumpers
		$("#jumpers li.current").removeAttr("class");
		$("#jumpers #" + slide).attr("class","current");
		//Set timer
		timer = setTimeout("nextSlide()",timeLen );
	});
}
$(document).ready( function(){
	timer = setTimeout("nextSlide()",timeLen );
	//ANIMATING SCROLL EFFECT
	$('nav a').click(function() {
		$('html, body').animate({scrollTop:$(this).attr('href').offset().top}, 700)
	});
})