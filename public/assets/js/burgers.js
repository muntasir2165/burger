// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    newBurgerToEat();
    devourBurger();
    deleteBurger();
    // shows the tooltip when the cursor hovers over the burger devouring/undo
    // and delete buttons
    $('[data-toggle="tooltip"]').tooltip(); 
});

function newBurgerToEat() {
    $("#submit_burger").on("click", function(event) {
        event.preventDefault();
        if ($("#burger_name").val()) {
            var burger_name = $("#burger_name").val().trim();
            addNewBurgerToEatToDb({"burger_name": burger_name, "devoured": false})   
        } else {
            alert("ERROR: Please enter a burger name before submitting the form.");
        }
    });
}

function addNewBurgerToEatToDb(newBurger) {
    console.log(JSON.stringify(newBurger));
    $.ajax({
        url: "/api/burgers",
        type: "POST",
        data: newBurger,
        success: function(result) {
            console.log("Created a new burger to eat.");
            // Reload the page to get the updated listing of burgers
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Sorry, invalid request.");
          console.log("textStatus: " + textStatus + " errorThrown: " + errorThrown);
        }
    });
}

function devourBurger() {
    $(document).on("click", ".devour_burger", function() {
        var id = $(this).attr("data-id");
        var devoured = $(this).attr("data-devoured");
        // when the burger is:
        // devoured => 1
        // undevoured => 0
        devoured = (devoured === "0" ? false : true);
        // update the burger's devour value by toggling it
        updateDevouredBurgerToDb(id, !devoured);
    });
}

function updateDevouredBurgerToDb(id, devoured) {
    $.ajax({
        url: "/api/burgers/" + id,
        type: "PUT",
        data: {"devoured": devoured},
        success: function(result) {
            console.log("Updated the status of the burger with id: " + id + " to devoured.");
            // Reload the page to get the updated listing of burgers
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Sorry, invalid request.");
          console.log("textStatus: " + textStatus + " errorThrown: " + errorThrown);
        }
    });
}

function deleteBurger() {
    $(document).on("click", ".delete_burger", function() {
        var id = $(this).attr("data-id");
        deleteBurgerInDb(id);
    });
}

function deleteBurgerInDb(id, devoured) {
    $.ajax({
        url: "/api/burgers/" + id,
        type: "DELETE",
        success: function(result) {
            console.log("Deleted the burger with id: " + id + ".");
            // Reload the page to get the updated listing of burgers
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Sorry, invalid request.");
          console.log("textStatus: " + textStatus + " errorThrown: " + errorThrown);
        }
    });
}


