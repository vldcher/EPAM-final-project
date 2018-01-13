$(function() {


	var availableRooms = document.getElementsByClassName('available-room-item');

	$('#search').bind('click', function() {

		$.getJSON('../data/rooms.json', function(json) {
			var jsonData = json;
			var roomPrices = [];
			var fromPrice = document.getElementById("from").value;
			var toPrice = document.getElementById("to").value;

			//creating room prices array from JSON data
			for (var i = 0; i < jsonData.length; i++) {
				var roomsGlobal = jsonData[i];
				roomPrices.push(roomsGlobal.price);
			}
			
			//show\hide filtered rooms elements by price
			for (var i = 0; i < availableRooms.length; i++) {
				if (roomPrices[i] >= fromPrice && roomPrices[i] <= toPrice) {
					availableRooms[i].style.display = "";
				} 
				else if(toPrice !== "") {
					availableRooms[i].style.display = "none";
				}
			}
		});
	});

	//clear filtering fileds (show all rooms)
	$('#clearFilter').bind('click', function() {
		// var availableRooms = document.getElementsByClassName('available-room-item');
		for (var i = 0; i < availableRooms.length; i++) {
			availableRooms[i].style.display = "";
		}
	});
});

