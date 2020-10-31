module.exports = function (app) {
    app.get("/", (req, res) => {
        res.send("home page!");
    });

    app.get("/dashboard", (req, res) => {
        res.render("dashboard");
    });
};