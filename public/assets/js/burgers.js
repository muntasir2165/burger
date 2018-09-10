// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    devourBurger();
    newBurgerToEat();
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
            console.log("created new burger to eat");
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
        url: "/api/burgers/devour/" + id,
        type: "PUT",
        data: {"devoured": devoured},
        success: function(result) {
            console.log("updated the status of the burger with id: " + id + " to devoured.");
            // Reload the page to get the updated listing of burgers
            location.reload();
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          alert("Sorry, invalid request.");
          console.log("textStatus: " + textStatus + " errorThrown: " + errorThrown);
        }
    });
}

// $(function() {
//   $(".change-sleep").on("click", function(event) {
//     var id = $(this).data("id");
//     var newSleep = $(this).data("newsleep");

//     var newSleepState = {
//       sleepy: newSleep
//     };

//     // Send the PUT request.
//     $.ajax("/api/cats/" + id, {
//       type: "PUT",
//       data: newSleepState
//     }).then(
//       function() {
//         console.log("changed sleep to", newSleep);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newCat = {
//       name: $("#ca").val().trim(),
//       sleepy: $("[name=sleepy]:checked").val().trim()
//     };

//     // Send the POST request.
//     $.ajax("/api/cats", {
//       type: "POST",
//       data: newCat
//     }).then(
//       function() {
//         console.log("created new cat");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE"
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
