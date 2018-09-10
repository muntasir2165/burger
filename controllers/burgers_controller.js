var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgers = {
      burgers: data
    };
    console.log(burgers);
    res.render("index", burgers);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, (req.body.devoured === "false" ? false : true)
  ], function(result) {
    // Send back the ID of the new database insert
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/devour/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  console.log(req.body.devoured, req.body.devoured === "false");

  burger.update({
    devoured: (req.body.devoured === "false" ? false : true)
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
