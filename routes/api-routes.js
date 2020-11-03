// Create routes and set up logic within those routes when required
const db = require("../models");
const passport = require("../config/passport");

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
        db.User.create({
            email: req.body.username,
            password: req.body.password
        }).then(() => {
            res.redirect(307, "/api/login");
        }).catch((err) => {
            res.status(401).json(err);
        });
    });

    //route to logout
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/all", (req, res) => {
        db.GuestList.findAll({
        }).then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
        });
    });

    app.post("/api/newGuest", (req, res) => {
        console.log(req.user);
        console.log(req.body);
        db.GuestList.create({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            phone_number: req.body.phoneNumber,
            street_address: req.body.streetAddress,
            city_address: req.body.cityAddress,
            zip_code: req.body.zipAddress,
            state_address: req.body.stateAddress,
            food_restriction: req.body.foodRestrictBool,
            food_restriction_details: req.body.foodRestrictText,
            additional_guests: req.body.additionalGuests,
            email: req.body.email,
            invited: req.body.invited,
            rsvp: req.body.rsvp,
            comment: req.body.comment,
            UserId: req.user.id
        }).then((results) => {
            res.json(results);
        }).catch((err) => {
            console.log(err);
        });
    });

};