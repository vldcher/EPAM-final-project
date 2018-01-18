$(function() {

	var targetValue; // sorting value
	var cheapFirstSortValue = 'cheap-first';
	var expensiveFirstSortValue = 'expensive-first';
	var sel = document.getElementById("sortingByPriceSelect");

	sel.onchange = function() {
		targetValue = this.value;
		var divs = $("div.available-room-item");
		switch (targetValue) {

			case cheapFirstSortValue:
					var numericallyOrderedDivs = divs.sort(function (a, b) {
							return $(a).data("price") > $(b).data("price")
					});
					numericallyOrderedDivs.each(function (i, item) {
							$("#allRoomsContainer").append(item);
					});
			console.log( 'cheap first' );
			break;
			
			case expensiveFirstSortValue:
				var numericallyOrderedDivs = divs.sort(function (a, b) {
							return $(a).data("price") < $(b).data("price")
					});
					numericallyOrderedDivs.each(function (i, item) {
							$("#allRoomsContainer").append(item);
					});
			console.log( 'expensive first' );
			break;
			default:
			console.log( 'cheap first' );
		}
	};
});

