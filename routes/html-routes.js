module.exports = function (app) {
    console.log("hit html-routes");
    app.get("/", (req, res) => {
        res.send("home page!");
    });


};