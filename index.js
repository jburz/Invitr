const express = require("express");
const app = express();
// const db = require("./models")

const PORT = process.env.PORT || 8080;

app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes.js")(app);

// db.sequelize.sync({ force: true }).then(function () {
app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT);
});
// });