$(function() {

	var targetValue; // sorting value
	var cheapFirstSortValue = 'cheap-first';
	var expensiveFirstSortValue = 'expensive-first';
	var sel = document.getElementById("sortingByPriceSelect");

	function roomsArray() {

		var roomsData = '{"rooms":[{"id":1,"type":"standart single","imageName":"standart-single","quantity":15,"roomsInNumber":1,"roomCapacity":1,"square":38,"price":100,"available":true,"roles":{"availableFrom":"somedate","availableTo":"somedate"}},{"id":2,"type":"standart double","imageName":"standart-double","quantity":17,"roomsInNumber":2,"roomCapacity":2,"square":45,"price":150},{"id":3,"type":"junior suite","imageName":"junior-suite","quantity":8,"roomsInNumber":3,"roomCapacity":3,"square":57,"price":200},{"id":4,"type":"suite","imageName":"suite","quantity":6,"roomsInNumber":3,"roomCapacity":3,"square":75,"price":300}]}';
		var jsonData = JSON.parse(roomsData);
		var roomPrices = [];
		//creating room prices array from JSON
		for (var i = 0; i < jsonData.rooms.length; i++) {
			var roomsGlobal = jsonData.rooms[i];
			roomPrices.push(roomsGlobal.price);
		}
		//create sorted arrays with room prices
		var cheapFirstArray = roomPrices.slice().sort();
		var expensiveFirstArray = cheapFirstArray.slice().reverse();
		console.log(cheapFirstArray);
		console.log(expensiveFirstArray);

	}

	roomsArray();

	// var availableRooms = document.getElementsByClassName('available-room-item');
	// console.log(availableRooms);

	sel.onchange = function() {
		targetValue = this.value;

		switch (targetValue) {
			case cheapFirstSortValue:
			console.log( 'cheap first' );
			break;
			case expensiveFirstSortValue:
			console.log( 'expensive first' );
			break;
			default:
			console.log( 'cheap first' );
		}
	};

});

