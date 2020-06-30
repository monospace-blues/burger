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
router.post("/api/cats", function (req, res) {

});

// devourering a burger!
router.put("/api/cats/:id", function (req, res) {

});

module.exports = router;