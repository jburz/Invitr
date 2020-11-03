//require packages and files
const isAuthenticated = require("../config/middleware/isAuthenticated");

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
        const currentUser = {
            email: req.user.email
        };
        res.render("dashboard", currentUser);
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