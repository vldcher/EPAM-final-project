'use strict';

var numberOfItems = $('#news .list-group').length;
var limitPerPage = 3; 
$('#news .list-group:gt(' + (limitPerPage - 1) + ')').hide(); // Hide all items over page limits 
var totalPages = Math.round(numberOfItems / limitPerPage);
$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");

//insert page number for each sets of items equal to page limit
for (var i = 2; i <= totalPages; i++) {
  $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); 
}

// Add next button after all the page numbers  
$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true>&raquo;</span></a></li>");

// Function that displays new items based on page number that was clicked
$(".pagination li.current-page").on("click", function() {
  if ($(this).hasClass('active')) {
    return false; 
  } else {
    var currentPage = $(this).index(); 
    $(".pagination li").removeClass('active');
    $(this).addClass('active'); 
    $("#news .list-group").hide();
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page number that was clicked on

    // Loop through total items, selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#news .list-group:eq(" + i + ")").show(); // Show items from the new page that was selected
    }
  }

});


// Function to navigate to the next page
$("#next-page").on("click", function() {
  var currentPage = $(".pagination li.active").index(); 

  if (currentPage === totalPages) {
    return false; 
  } else {
    currentPage++;
    $(".pagination li").removeClass('active'); 
    $("#news .list-group").hide(); 
    var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected

    // selecting a new set of items based on page number
    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#news .list-group:eq(" + i + ")").show();
    }
    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});

// Function to navigate to the previous page
$("#previous-page").on("click", function() {
  var currentPage = $(".pagination li.active").index();
  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
  if (currentPage === 1) {
    return false;
  } else {
    currentPage--; 
    $(".pagination li").removeClass('active'); 
    $("#news .list-group").hide();
    var grandTotal = limitPerPage * currentPage; 

    for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
      $("#news .list-group:eq(" + i + ")").show();
    }
    $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active');
  }
});