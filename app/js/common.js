//Jquery
$(function() {
	// plugin for pretty responsive mobile menu
	var $menu = $("#my-menu").mmenu({
		"extensions": [
		"pagedim-black",
		"theme-dark",
		"fx-menu-zoom",
		"listview-huge",
		"border-full"
		],
		"offCanvas": {
			"position": "right"
		}

	});
	var $icon = $("#mmenu-icon");
	var API = $menu.data( "mmenu" );
	$icon.on( "click", function() {
		API.open();
	});

	API.bind( "opened", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		}, 100);
		$icon.on( "click", function() {
			API.close();
		});
	});

	API.bind( "closed", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		}, 100);
		$icon.on( "click", function() {
			API.open();
		});
	});
	// plugin for crossbrowsing date input
	$("#txtFrom").datepicker({
		numberOfMonths: 1,
		onSelect: function (selected) {
			var dt = new Date(selected);
			dt.setDate(dt.getDate() + 1);
			$("#txtTo").datepicker("option", "minDate", dt);
		}
	});
	$("#txtTo").datepicker({
		numberOfMonths: 1,
		onSelect: function (selected) {
			var dt = new Date(selected);
			dt.setDate(dt.getDate() - 1);
			$("#txtFrom").datepicker("option", "maxDate", dt);
		}
	});
	// add styles for active menu link
	$('.desktop-menu__menu-list a').each(function () {
		var location = window.location.href;
		var link = this.href; 
		if(location == link) {
			$(this).addClass('active');
		}
	});
	 //button to top
	 $(window).scroll(function() {
	 	if ($(this).scrollTop() > $(this).height()){
	 		$('.top').addClass('active');
	 	} else {
	 		$('.top').removeClass('active');
	 	}

	 });
	//to top scrolling when click to top button
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	 //preloader
	 // $(window).on('load', function() {
	 	$('.preloader').delay(500).fadeOut('slow');
	 // });

	});

//Mobile menu hamburger
var hamburger = document.querySelector(".hamburger");
	hamburger.addEventListener("click", function(e) {
	hamburger.classList.toggle("is-active");
	e.preventDefault();
});
