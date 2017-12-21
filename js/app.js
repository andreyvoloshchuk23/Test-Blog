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