$(function() {

	var roomsArray = [];
	function roomsArrayCreate() {

		var roomsData = '{"rooms":[{"id":1,"type":"standart single","imageName":"standart-single","quantity":15,"roomsInNumber":1,"roomCapacity":1,"square":38,"price":100,"available":true,"roles":{"availableFrom":"somedate","availableTo":"somedate"}},{"id":2,"type":"standart double","imageName":"standart-double","quantity":17,"roomsInNumber":2,"roomCapacity":2,"square":45,"price":150},{"id":3,"type":"junior suite","imageName":"junior-suite","quantity":8,"roomsInNumber":3,"roomCapacity":3,"square":57,"price":200},{"id":4,"type":"suite","imageName":"suite","quantity":6,"roomsInNumber":3,"roomCapacity":3,"square":75,"price":300}]}';
		var jsonData = JSON.parse(roomsData);
		var roomPrices = [];

		for (var i = 0; i < jsonData.rooms.length; i++) {
			var roomsGlobal = jsonData.rooms[i];
			roomsArray.push(roomsGlobal);
		}
		
}
roomsArrayCreate();


function compareRoomPrice(a, b) {
	if(a.price == b.price) {
		if(a.name == b.name) return 0;
		else if(a.name > b.name) return -1;
		else return 1;
	}
	else if (a.price > b.price) { 
		if (b.price != 0 ) return 1;
		else return -1 
	}
    else // if (a.price < b.price) 
    {
    	if (a.price != 0 ) return -1;
    	else return 1;
    }
  }


  var cheapFirstArray = roomsArray.slice().sort(compareRoomPrice);
  var expensiveFirstArray = cheapFirstArray.slice().reverse();

  // console.log(cheapFirstArray);
  // console.log(expensiveFirstArray);


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

