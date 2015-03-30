/* Exercise 1: Wish list */
/*
$(document).on('click', '#add-to-list', function addToList(event){
	var item = $("input").val();
	$("ol#items").append("<span class='label pending'>Pending</span>" + "<li>" + item + "</li>");
	$("input").val("");
	$("input#item").focus();
	
});*/
function updateTotal(){
	//$(".total").text("Pending: ");
	var pending = $(".pending").length;
	var completed = $(".success").length;

	$(".total").text("Pending: " + pending + " complete: " + completed);
}

$(document).on('click', '#add-to-list', function addToList(event){
	var item = $("input").val();
	$("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>");
	$("input#item").val("");
	$("input#item").focus();
	updateTotal();
	
});

$(document).on('click', '.pending', function addNewClass(){
	$(this).parent().addClass("completed");
	$(this).parent().append("<span class='label success'>Done!</span>");
	$(this).remove();
	updateTotal();
});







































