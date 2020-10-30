// Create routes and set up logic within those routes when required
var GuestList = require("../models/guestlist.js");
var GuestLogin = require("../models/guestlogin.js");

// Provide a list of all people currently on the guest list
module.exports = function (app) {
    app.get("/api/all", function (req, res) {
        GuestList.findAll({}).then(function (results) {
            res.json(results);
        });
    });
};