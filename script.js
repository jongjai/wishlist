/* Exercise 1: Wish list */
/*
$(document).on('click', '#add-to-list', function addToList(event){
	var item = $("input").val();
	$("ol#items").append("<span class='label pending'>Pending</span>" + "<li>" + item + "</li>");
	$("input").val("");
	$("input#item").focus();
	
});*/
$(document).on('submit', 'form', function addToList(event){
	event.preventDefault();
	var item = $("input").val();
	$("ol#items").append("<span class='label pending'>Pending</span>" + "<li>" + item + "</li>");
	$("input#item").val("");
	$("input#item").focus();
	
});

$(document).on('click', '.pending', function addNewClass(){
	$(this).parent().prepend("<span class='label success'>Done!</span>");
	$(this).remove();
});





































