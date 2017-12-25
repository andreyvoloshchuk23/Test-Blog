// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

var nav_active = document.querySelectorAll(".nav_list_link")[2];
nav_active.classList += ' active';

function menu(){
	var menu = document.querySelector(".nav_menu"),
			nav_list = document.querySelector(".nav_list"),
			nav = document.querySelector('.nav');
	menu.addEventListener("click", function(){
		menu.classList.toggle('active_menu');
		nav_list.classList.toggle('active_nav');
		nav.classList.toggle('fix');
		document.querySelector('.header_center').classList.toggle("margin");
	});			
};
menu();

function slider(){
	var prev = $(".slider .slider_wrap .prev"),
			next = $(".slider .slider_wrap .next"),
			item_width = $(".slider").width(),
			item_height = $(".slider").height(),
			marginLeft = 0,
			item_counter = $(".slider .slider_wrap .slider_item").length;
	$(window).resize(function(){
		item_width = $(".slider").width();
		item_height = $(".slider").height();
		marginLeft = $(".slider").width();
		$('.slider .slider_wrap .slider_item').width($(".slider").width());
		$(".slider .slider_wrap").css("margin-left", -marginLeft);		
	});		
	next.on("click", function(){
		marginLeft += $(".slider").width();
		$(".slider .slider_wrap").css("margin-left", -marginLeft);
		if(marginLeft > $(".slider").width() * item_counter - 1){
			$(".slider .slider_wrap").css("margin-left", 0);	
			marginLeft = 0;
		};
	});
	prev.on("click", function(){
		marginLeft -= $(".slider").width();
		console.log(marginLeft);	
		if (marginLeft < 0){
			console.log("true");
			marginLeft = $(".slider").width() * (item_counter - 1);
			$(".slider .slider_wrap").css("margin-left", -marginLeft);	
			console.log(marginLeft);
		}
		else $(".slider .slider_wrap").css("margin-left", -marginLeft);
	});	
};
slider();


function photoGallery(){
	$(".blog_others_photo_item").on("click", function(e){
		e.stopPropagation();
		var clone = $(this).clone(),
				close = $(".blog_others_photo__big .close").clone();
		$(".blog_others_photo__big").empty();
		$(".blog_others_photo__big").append(clone);
		$(".blog_others_photo__big").append(close);
		$(".close").on("click", function(){
			if ($(".blog_others_photo__big").is(":visible") == true){
			$(".blog_others_photo__big").fadeOut();
			$(".black").fadeOut();
		}
		});
		$(".blog_others_photo__big").fadeIn();
		$(".black").fadeIn();
	});
		$(".black").on("click", function(){
			if ($(".blog_others_photo__big").is(":visible") == true){
			$(".blog_others_photo__big").fadeOut();
			$(".black").fadeOut();
		};
	});	
};		
photoGallery();