$(function(){

	function contains(textOne, textTwo) {
		if (textOne.indexOf(textTwo) != -1)
			return true;
	}

	$("#search-hotel-address").keyup(function() {
		var searchText = $("#search-hotel-address").val().toLowerCase()
		$("#hotels-list .hotel-address").each(function() {
			if (!contains($(this).text().toLowerCase(), searchText))
			 {
			 	$(this).hide();
			 }
			 else {
			 	$(this).show();
			 }
		});
	});
});