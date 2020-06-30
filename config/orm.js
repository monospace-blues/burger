// Dependencies (importing connection.js)
const connection = require("./connection.js");

const orm = {
    // select all from the database and use a callback to get the result
    selectAll: function (cb) {
        let queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });

    },
    // insert one burger dish and put it in the database
    insertOne: function (burgerName, cb) {
        let queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);";

        connection.query(queryString, burgerName, function(err, result) {
            if (err) throw err;
            cb(result);
        });

    },
    // change the state of the burger
    updateOne: function (idNum, cb) {
        let queryString = "UPDATE burgers SET devoured = true WHERE id = ?;";

        connection.query(queryString, idNum, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// export it
module.exports = orm;