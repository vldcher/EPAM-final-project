// get the mPopup
// var mpopup = document.getElementById('mpopupBox');

// get the link that opens the mPopup
// var mpLink = document.getElementsByClassName("mpopupLink")[0];

// get the close action element
// var close = document.getElementsByClassName("close")[0];

// open the mPopup once the link is clicked
// mpLink.onclick = function() {
//     mpopup.style.display = "block";
// }

$(function() {
  $('.mpopupLink').bind('click', function(){

	alert('hi');
	// $('.mpopupBox').css("display", "block");
});

});


// close the mPopup once close element is clicked
// close.onclick = function() {
//     mpopup.style.display = "none";
// }
// $('.close').bind('click', function() {
// 	$('.mpopup').css("display","none");
// })

// close the mPopup when user clicks outside of the box
// window.onclick = function(event) {
//     if (event.target == mpopup) {
//         mpopup.style.display = "none";
//     }
// }