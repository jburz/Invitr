// Create routes and set up logic within those routes when required
const db = require("../models");
const passport = require("../config/passport");

// var GuestLogin = require("../models/guestlogin.js");

// Provide a list of all people currently on the guest list
module.exports = function (app) {

    //this route authenticates the user from the login screen
    app.post("/api/login", passport.authenticate("local", {
        failureFlash: true
    }), (req, res) => {
        res.json(req.user);
    });

    //creates a new user and redirects to home
    app.post("/api/signup", (req, res) => {
        console.log(req.body.username);
        console.log(req.body.password);
        db.User.create({
            email: req.body.username,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch((err) => {
            console.log(err);
            res.status(401).json(err);
        });
    });

    //route to logout
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/all", (req, res) => {
        db.GuestList.findAll({}).then((results) => {
            res.json(results);
        });
    });



};