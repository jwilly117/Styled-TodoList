// hold the logic for storing todos and deleting todos

alert("Source Loaded");

var listCount = 0;

$("add-to-do").on("click", function(event){
    event.preventDefault();

    // Get the to-do "value" from the textbox and store it in a variabl
    var toDoTask = $("#to-do").val().trim();

    // Create a new variable that will hold a <p> tag
    // Then give it an ID in the folowing fomr;
    // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount
    // Then set the to-do "value" as text to this <p> element.
    var toDoItem = $("<p>");

    toDoItem.attr


});