	var hamburger = document.querySelector(".hamburger");
	
	// var menu = document.getElementById('menu1');

	// On click
	hamburger.addEventListener("click", function(e) {
		hamburger.classList.toggle("is-active");
		// menu.classList.toggle('open');
		e.preventDefault();

			// menu.classList.contains('open')?menu.classList.remove('open'):menu.classList.add('open');
// Создать ксс класс для моб меню

		
});

// arrival and departure date of visit
// var today = new Date();
// var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

// Set values
// $("#theDate").val(getFormattedDate(today));
// $("#theTomorrow").val(getFormattedDate(tomorrow));

// Get date formatted as YYYY-MM-DD
// function getFormattedDate (date) {
//     return date.getFullYear()
//         + "-"
//         + ("0" + (date.getMonth() + 1)).slice(-2)
//         + "-"
//         + ("0" + date.getDate()).slice(-2);
// }

// document.getElementById('arrivalDate').valueAsDate = new Date();
// document.getElementById('departureDate').valueAsDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);


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
	// add plugin for crossbrowsing date input
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
	//to top scroll
	 $('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	 //preloader
	$(window).on('load', function() {
	$('.preloader').delay(500).fadeOut('slow');
});

});

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		 x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		 dots[i].className = dots[i].className.replace(" white-circle", "");
	}
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " white-circle";
}

