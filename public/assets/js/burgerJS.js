// to make this work in handlebars, we use a function
//
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

// Send PUT (devoured) request
$(".changed-devoured").click(function (event) {
    event.preventDefault();

    let id = $(this).data("id");

    console.log(id);

    $.ajax("/api/burgers/" + id, {
        type: "PUT"
    }).then(function() {
        location.reload();
    });

});

// Send POST (newBurger) request
$(".create-form").on("submit", function (event) {
    event.preventDefault();

    // create burger obj to send to post
    // NOTE TO SELF, DONT PUT SEMICOLONS ; AT THE END OF OBJECTS!!!!FFFFFFFFFFFFFFFFF for my 22hrs wasted...
    let newBurger = {
        // Get the value from the form.
        name: $("#burg").val().trim()
    };

    $.post("/api/burgers", newBurger)
    .then(function() {
        console.log("created new burger");
        // Refresh the page to get the updated list.
        location.reload();
    });
});

});
    