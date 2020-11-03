//require packages and files
const isAuthenticated = require("../config/middleware/isAuthenticated");
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
        db.GuestList.count().then((allGuests) => {
            // count how many guests are listed in database
            allCounts.allListed = allGuests;
            // count how many invitations sent
            return db.GuestList.count({ where: { "invited": 1 } });
        }).then((countInvited) => {
            allCounts.invitationsSent = countInvited;
            // count how many have not rsvpd
            return db.GuestList.count({ where: { "rsvp": 0 } });
        }).then((noRSVP) => {
            allCounts.notRSVP = noRSVP;
            // count how many have incomplete info
            return db.GuestList.count({
                where: {
                    [Op.or]: [{ first_name: null }, { last_name: null }, { phone_number: null }, { street_address: null }, { city_address: null }, { zip_code: null }, { state_address: null }, { food_restriction: null }, { additional_guests: null }, { email: null }]
                }
            });
        }).then((countIncompleteInfo) => {
            allCounts.incompleteInfo = countIncompleteInfo;
            // count how many have RSVPd
            return db.GuestList.count({ where: { "rsvp": 1 } });
        }).then((yesRSVP) => {
            allCounts.haveRSVP = yesRSVP;
            // count how many invites have not been sent
            return db.GuestList.count({ where: { "invited": 0 } });
        }).then((noInvited) => {
            allCounts.invitesNotSent = noInvited;
            res.render("dashboard", allCounts);
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
        const currentUser = {
            email: req.user.email
        };
        res.render("details", currentUser);
    });

};