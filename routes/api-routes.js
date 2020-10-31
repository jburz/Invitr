// Create routes and set up logic within those routes when required
const db = require("../models");
// var GuestLogin = require("../models/guestlogin.js");

// Provide a list of all people currently on the guest list
module.exports = function (app) {
    app.get("/api/all", (req, res) => {
        db.GuestList.findAll({}).then((results) => {
            res.json(results);
        });
    });

    app.post("/api/signup", (req, res) => {
        db.User.create({
            email: req.body.username,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch((err) => {
            res.status(401).json(err);
        });

    });

    app.post("/api/login", (req, res) => {
        console.log("log me in!");
        console.log(req.body);
        res.json("logged in!");
    });
};