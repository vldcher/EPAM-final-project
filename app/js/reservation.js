$(function() {
	$.getJSON('../data/rooms.json', function(data) {
	var output = '<div class="reservation__rooms">';
		$.each(data, function(key, val) {
			output += '<div class="available-room-item">';
				output += '<div class="available-room-item__image">';
					output += '<img src="../img/reservation-previews/'+ val.imageName +'.jpg" alt="'+ val.type +'" />';
				output += '</div>';

				output += '<div class="available-room-item__info">';
					output += '<div class="available-room__header">';
						output += '<p>'+ val.type +'</p>';
					output += '</div>';

					output += '<div class="available-room__guest-quantity">';
						output += '<p>'+ 'Accomodation for :' +'</p>';
						output += '<p class="room-guest-quantity">'+ val.roomCapacity + 'guest(s)' +'</p>';
					output += '</div>';

					output += '<div class="available-room__price">';
						output += '<p class="price-field">'+ 'Price :' + val.price + '</p>';
						output += '<p class="per-night">' + 'per night' +'</p>';
					output += '</div>';

				output += '</div>';

				output += '<div class="available-room-item__arrow">';
					output += '<a href="javascript:void(0);" class="mpopupLink">' +' <i class="fa fa-chevron-right">' + '</i>'+'</a>';
					
					output += '<div class="mpopup mpopupBox">';
						output += '<div class="mpopup-content">';

							output += '<div class="mpopup-head">';
								output += '<span class="close">' + 'x' + '</span>';
								output += '<h2>' + 'Reservation' + '</h2>';
							output += '</div>';

							output += '<div class="mpopup-main">';
								output += '<p>' + 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam corporis quas repellendus unde minima, consectetur commodi consequatur quam, iure, ea veniam. Tempora cum dolorum quaerat, saepe magni eaque repudiandae aperiam!' + '</p>';
							output += '</div>';

							output += '<div class="mpopup-foot">';
								output += '<p>' + 'Hotel Locanda' + '</p>';
							output += '</div>';

						output += '</div>';
					output += '</div>';
				output += '</div>';


				

			
			output += '</div>';
		});
	output += '</div>';
	$('#update').html(output);
}); //get JSON
});