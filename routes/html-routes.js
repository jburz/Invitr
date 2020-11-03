//require packages and files
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    //route to dashboard if authenticated
    app.get("/", (req, res) => {
        console.log(req.user);
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("landingpage");
    });

    //route to dashboard if authenticated
    app.get("/login", (req, res) => {
        console.log(req.user);
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("login");
    });

    //route to dashboard if authenticated
    app.get("/signup", (req, res) => {
        console.log(req.user);
        if (req.user) {
            res.redirect("/dashboard");
        }
        res.render("signup");
    });

    //route to login if not authenticated
    app.get("/dashboard", isAuthenticated, (req, res) => {
        console.log("hit dasboard");
        const currentUser = {
            email: req.user.email
        };
        console.log(currentUser);
        res.render("dashboard", currentUser);
    });


    //route to login if not authenticated
    app.get("/addguest", isAuthenticated, (req, res) => {
        console.log(req.user);
        const currentUser = {
            email: req.user.email
        };
        console.log(currentUser);
        res.render("addguest", currentUser);
    });

};