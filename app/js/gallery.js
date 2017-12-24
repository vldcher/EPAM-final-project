		var gallery = document.getElementById('gallery');

		function preventDefault(e) {
			return e.preventDefault ? e.preventDefault() : (e.returnValue = true);
		}

		var selectedImg;
		function hightlight(elem) {
			if(selectedImg) {
				selectedImg.style.backgroundColor = '';
			}

			selectedImg = elem;
			elem.style.backgroundColor = 'lightblue';
		}

		function handlThumbs(e) {
			var event = e || window.e,
			target = event.target || event.srcElement;
			preventDefault(event);
			var largeImg = this.querySelector('#largeImg img');
			outHere:
			while(this.querySelector('#thumbs').contains(target)) {
				switch(target.tagName) {
					case 'IMG':
						largeImg.setAttribute('src', target.parentNode.getAttribute('href'));
						hightlight(target.parentNode);
						break outHere;
					case 'A':
						largeImg.setAttribute('src', target.getAttribute('href')); 	
						hightlight(target);
						break outHere;
					default:
						target = target.parentNode;
				}
			}			
		}

		gallery.addEventListener('click', handlThumbs);