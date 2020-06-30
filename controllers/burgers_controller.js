// Dependencies
const express = require("express");
// Importing the model (burger.js) to use as database.
const burger = require("../models/burger.js");

const router = express.Router();

// creating all our routes and setting up the logic
// getting all burgers from database!
router.get("/", function (req, res) {

    // using the orm!
    burger.all(function(data) {

        // set an object for handlebars to... handle...
        let hbsObj = {
            // data is an array with objects from the DB.
            // set it to a burgers property for handlebars to use
            burgers: data
        };
        console.log(hbsObj);
        // render it using handlebars.
        res.render("index", hbsObj);
    });
    

});

// inserting a new burger!
router.post("/api/burgers", function (req, res) {
    // req.body is where we'll get the data sent to us from the front end.

    // send this data to the DB
    burger.insert(req.body.name, function (result) {
        res.json({ id: result.insertId });
    });
    

});

// devourering a burger!
router.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id);
    // req.params.id is where we'll get the id of the burger that will be devoured

    // send this data to the DB
    burger.devoured(req.params.id, function (result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });


});

module.exports = router;