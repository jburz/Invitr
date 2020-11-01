module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("landingpage");
    });

    app.get("/dashboard", (req, res) => {
        res.render("dashboard");
    });

    app.get("/login", (req, res) => {
        res.render("login");
    });

    app.get("/signup", (req, res) => {
        res.render("signup");
    });

    app.get("/addguest", (req, res) => {
        res.render("addguest");
    });
};