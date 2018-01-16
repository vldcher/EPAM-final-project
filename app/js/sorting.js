// 'use strict';
$(function() {

	var roomsArray = [];
	var roomsPrices = [];
	function roomsArrayCreate() {
		$.getJSON('../data/rooms.json', function(json) {
			
			var jsonData = json;

			for (var i = 0; i < jsonData.length; i++) {
				var roomsGlobal = jsonData[i];
				roomsArray.push(roomsGlobal);
			}

			// creating room prices array from JSON data
			for (var i = 0; i < jsonData.length; i++) {
				var roomsGlobal = jsonData[i];
				roomsPrices.push(roomsGlobal.price);
			}

			var cheapFirstArray = roomsArray.slice().sort(compareRoomPrice);
			var expensiveFirstArray = cheapFirstArray.slice().reverse();

			// console.log(cheapFirstArray);
			// console.log(expensiveFirstArray);

		});

	}
	roomsArrayCreate();




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

	var targetValue; // sorting value
	var cheapFirstSortValue = 'cheap-first';
	var expensiveFirstSortValue = 'expensive-first';
	var sel = document.getElementById("sortingByPriceSelect");

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

