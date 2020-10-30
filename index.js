const express = require("express");
const app = express();
// const db = require("./models")
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes.js")(app);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// db.sequelize.sync({ force: true }).then(function () {
app.listen(PORT, () => {
    console.log("Listening on Port: " + PORT);
});
// });