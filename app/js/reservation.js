$(function() {
	$.getJSON('../data/rooms.json', function(data) {
		var output = '<div class="reservation__rooms" id="allRoomsContainer">';
		$.each(data, function(key, val) {
			output += '<div class="available-room-item" data-price='+val.price + '>';
			output += '<div class="available-room-item__image">';
			output += '<img src="../img/reservation-previews/'+ val.imageName +'.jpg" alt="'+ val.type +'" />';
			output += '</div>';

			output += '<div class="available-room-item__info">';
			output += '<div class="available-room__header">';
			output += '<p>'+ val.type +'</p>';
			output += '</div>';

			output += '<div class="available-room__guest-quantity">';
			output += '<p>'+ 'Accomodation for : ' +'</p>';
			output += '<p class="room-guest-quantity">'+ val.roomCapacity + 'guest(s)' +'</p>';
			output += '</div>';

			output += '<div class="available-room__price">';
			output += '<p class="price-field">'+ 'Price : ' + val.price + '<i class="fa fa-usd">'+'</i>' +'</p>';
			output += '<p class="per-night">' + 'per night' +'</p>';
			output += '</div>';

			output += '<div class="available-room__quantity">';
			output += '<p class="available-quantity-field">'+ 'Available rooms : ' + '<span class="room-quantity--accent">' + val.quantity + '</span>' +'</p>';
			output += '</div>';

			output += '</div>';

			output += '<div class="available-room-item__arrow">';
			output += '<a href="javascript:void(0);" class="mpopupLink">' +' <i class="fa fa-chevron-right">' + '</i>'+'</a>';
			output += '</div>';

			output += '</div>';
		});
		output += '</div>';
		$('#update').html(output);

		// open\close modal windows
		$('.mpopupLink').bind('click', function(){
			$('.mpopupBox').css("display", "block");
				//lock page scrolling
				$("html,body").css("overflow","hidden");
			});

		$('.close').bind('click', function() {
			$('.mpopupBox').hide("fast");
				//unlock page scrolling
				$("html,body").css("overflow","auto");
			});

		$(document).mouseup(function (e) {
			var container = $(".mpopupBox");
			if (container.has(e.target).length === 0){
				container.hide("fast");
				$("html,body").css("overflow","auto");
			}
		});
		$("form").on('submit',function(e){
				alert("Thank you for booking, order details have been sent to your e-mail.");
				$('.mpopupBox').hide("fast");
				$("html,body").css("overflow","auto");
		});

	});//get JSON

});