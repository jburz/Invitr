//require packages and files
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("landingpage");
    });

    app.get("/dashboard", (req, res) => {
        res.render("dashboard");
    });

    app.get("/login", (req, res) => {
        console.log("hit /login");
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("login");
    });

    app.get("/signup", (req, res) => {
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("signup");
    });

    app.get("/addguest", (req, res) => {
        res.render("addguest");
    });
};