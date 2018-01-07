$(function() {

	$('#search').bind('click', function() {

		var roomsData = '{"rooms":[{"id":1,"type":"standart single","imageName":"standart-single","quantity":15,"roomsInNumber":1,"roomCapacity":1,"square":38,"price":100,"available":true,"roles":{"availableFrom":"somedate","availableTo":"somedate"}},{"id":2,"type":"standart double","imageName":"standart-double","quantity":17,"roomsInNumber":2,"roomCapacity":2,"square":45,"price":150},{"id":3,"type":"junior suite","imageName":"junior-suite","quantity":8,"roomsInNumber":3,"roomCapacity":3,"square":57,"price":200},{"id":4,"type":"suite","imageName":"suite","quantity":6,"roomsInNumber":3,"roomCapacity":3,"square":75,"price":300}]}';
		var fromPrice = document.getElementById("from").value;
		var toPrice = document.getElementById("to").value;
		// var allRoomsContainer = document.getElementById("allRoomsContainer");
		var availableRooms = document.getElementsByClassName('available-room-item');
		var jsonData = JSON.parse(roomsData);
		var roomPrices = [];

		//creating room prices array from JSON
		for (var i = 0; i < jsonData.rooms.length; i++) {
			var roomsGlobal = jsonData.rooms[i];
			roomPrices.push(roomsGlobal.price);
		}
		//filtering rooms elements by price
		for (var i = 0; i < availableRooms.length; i++) {
			if (roomPrices[i] >= fromPrice && roomPrices[i] <= toPrice) {
				availableRooms[i].style.display = "";
			} 
			else if(toPrice !== "") {
				availableRooms[i].style.display = "none";
			}
			// else {
			// 	alert('Please, enter value');
			// }
		}
	});

	//clear filtering fileds (show all rooms)
	$('#clearFilter').bind('click', function() {
		var availableRooms = document.getElementsByClassName('available-room-item');
		for (var i = 0; i < availableRooms.length; i++) {
			availableRooms[i].style.display = "";
		}
	});
});

