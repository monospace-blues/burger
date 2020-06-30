// Dependencies
const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        // using a callback function we can get the results from the orm!
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    // inserting requires the "name" of the burger and a callback function to get the results!
    insert: function (nameOfBurger, cb) {
        orm.insertOne(nameOfBurger, function (res) {
            cb(res);
        });
    },

    // to update the burger (in this case from "not devoured" to devoured) we only need the id number and a callback for results!
    devoured: function (id, cb) {
        orm.updateOne(id, function (res) {
            cb(res);
        });

    }
};

module.exports = burger;