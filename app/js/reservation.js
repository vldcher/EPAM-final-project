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

		var list = document.getElementsByClassName("available-room-item");
		var roomsPricesArray = [];


		///
		var divs = $("div.available-room-item");
		console.log(divs);

		$('#numBnt').on('click', function () {
    var numericallyOrderedDivs = divs.sort(function (a, b) {
        return $(a).data("price") > $(b).data("price")
    });
    numericallyOrderedDivs.each(function (i, item) {
        $("#allRoomsContainer").append(item);
    });


		// for (var item of list) {

		// 	var roomPrice = item.dataset.price;
		// 	roomsPricesArray.push(roomPrice);
		// 	var cheapFirstArray = roomsPricesArray.slice().sort(compareRoomPrice);
		// 	var expensiveFirstArray = cheapFirstArray.slice().reverse();

		// 	if (item.dataset.price1 > item.dataset.price2){
		// 		item.dataset.price1.detach();
		// 		item.dataset.price2.append(item.dataset.price1);
		// 	}
		// 	else {
		// 		item.dataset.price2.detach();
		// 		item.dataset.price1.append(item.dataset.price2);
		// 	}

		// }

		// var cheapFirstArray = pricesArray.slice().sort(compareRoomPrice);
		// var expensiveFirstArray = cheapFirstArray.slice().reverse();

		// console.log(cheapFirstArray);
		// console.log(expensiveFirstArray);


		function compareRoomPrice(a, b) {

			if (a.price > b.price) { 
				if (b.price != 0 ) return 1;
				else return -1 
			}
				else // if (a.price < b.price) 
				{
					if (a.price != 0 ) return -1;
					else return 1;
				}
			}

	}); //get JSON

});

});