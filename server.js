const express = require("express");
const app = express();
const db = require("./models");
const exphbs = require("express-handlebars");
const session = require("express-session");
const passport = require("./config/passport");
const flash = require("express-flash");

const PORT = process.env.PORT || 8080;

//setting up middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());

//keep track of user sessions
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//use handlebars to serve web pages
require("./routes/api-routes.js")(app);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//require routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log("Listening on Port: " + PORT);
    });
});