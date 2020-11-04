//require packages and files
const isAuthenticated = require("../config/middleware/isauthenticated");
const db = require("../models");
const { Op } = require("sequelize");

module.exports = function (app) {
    //route to dashboard if authenticated
    app.get("/", (req, res) => {
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("landingpage");
    });

    //route to dashboard if authenticated
    app.get("/login", (req, res) => {
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("login");
    });

    //route to dashboard if authenticated
    app.get("/signup", (req, res) => {
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("signup");
    });

    //route to login if not authenticated
    app.get("/dashboard", isAuthenticated, (req, res) => {
        const allCounts = {
            email: req.user.email,
            allListed: 0,
            invitationsSent: 0,
            invitesNotSent: 0,
            notRSVP: 0,
            incompleteInfo: 0,
            haveRSVP: 0
        };
        db.GuestList.count({
            where: {
                UserId: req.user.id
            }
        }).then((allGuests) => {
            // count how many guests are listed in database
            allCounts.allListed = allGuests;
            // count how many invitations sent
            return db.GuestList.count({
                where: {
                    "invited": 1,
                    UserId: req.user.id
                }
            });
        }).then((countInvited) => {
            allCounts.invitationsSent = countInvited;
            // count how many have not rsvpd
            return db.GuestList.count({
                where: {
                    "rsvp": 0,
                    UserId: req.user.id
                }
            });
        }).then((noRSVP) => {
            allCounts.notRSVP = noRSVP;
            // count how many have incomplete info
            return db.GuestList.count({
                where: {
                    [Op.or]: [
                        { first_name: "" },
                        { last_name: "" },
                        { phone_number: "" },
                        { street_address: "" },
                        { city_address: "" },
                        { zip_code: "" },
                        { state_address: "" },
                        { food_restriction: "" },
                        { additional_guests: "" },
                        { email: "" }
                    ],
                    UserId: req.user.id
                }
            });
        }).then((countIncompleteInfo) => {
            allCounts.incompleteInfo = countIncompleteInfo;
            // count how many have RSVPd
            return db.GuestList.count({
                where: {
                    "rsvp": 1,
                    UserId: req.user.id
                }

            });
        }).then((yesRSVP) => {
            allCounts.haveRSVP = yesRSVP;
            return db.GuestList.count({
                where: {
                    "invited": 0,
                    UserId: req.user.id
                }
            });
        }).then((noInvited) => {
            allCounts.invitesNotSent = noInvited;
            res.render("dashboard", allCounts);
        }).catch(err => {
            console.log(err);
        });
    });


    //route to login if not authenticated
    app.get("/addguest", isAuthenticated, (req, res) => {
        const currentUser = {
            email: req.user.email
        };
        res.render("addguest", currentUser);
    });

    // route to lead to guest details
    app.get("/details", isAuthenticated, (req, res) => {
        const guests = [];
        let endGuests = {};
        guests.push({ userEmail: req.user.email });
        db.GuestList.findAll({
            where: {
                UserId: req.user.id
            }
        }).then((results) => {
            for (i = 0; i < results.length; i++) {
                guests.push(results[i].dataValues);
            }
            endGuests = { guests };
            console.log(endGuests);
            res.render("details", endGuests);
        });
        // get all details, add to current user, pass to res.render
    });

};