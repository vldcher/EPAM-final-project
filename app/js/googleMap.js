function initMap() {
	var mapDiv = document.getElementById("map");
	var options = {
		zoom: 14,
		center: {lat: 50.4473015, lng: 30.4541150}
	};

	var myMap = new google.maps.Map(mapDiv, options);
	var markers = [
				{
					coordinates: {lat: 50.4473015, lng: 30.4541150},
					image: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
					info: '<h1>We are here!</h1>'
				},
				{
					coordinates: {lat: 50.440330, lng: 30.489484},
					info: '<h1>Railway Station</h1>'
				}
		];

		for (var i =0; i < markers.length; i++) {
			addMarker(markers[i]);
		}


	function addMarker(properties) {
		var marker = new google.maps.Marker({
			position: properties.coordinates,
			map: myMap, 
		});

		if(properties.image){
			marker.setIcon(properties.image);
		}

		if(properties.info){
				var InfoWindow = new google.maps.InfoWindow({
				content: properties.info
			});

			marker.addListener('click', function() {
				InfoWindow.open(myMap, marker);
			})
		}
	}
}