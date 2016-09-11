$(document).ready(function() {
	console.log("jQuery Connected");
	$("#js-shopping-list-form").children("button").click(function(event) {
		event.preventDefault();
		var newListItem = $("#shopping-list-entry").val();
		$(".shopping-list").append("<li>" + 
			"<span class='shopping-item'>" + newListItem + "</span>" +
			"<div class=shopping-item-controls'>" +
			"<button class='shopping-item-toggle'>" +
            "<span class='button-label'>check</span>" +
          	"</button>" +
         	"<button class='shopping-item-delete'>" +
            "<span class='button-label'>delete</span>" +
          	"</button>" +
        	"</div>" +
      		"</li>"
      	);
	});

	$(".shopping-list").on('click', '.shopping-item-toggle', function() {
		$(this).parents("li").children(".shopping-item").css("text-decoration", "line-through");
	});

	$(".shopping-list").on('click', '.shopping-item-delete', function() {
		$(this).parents("li").remove();
	})
});