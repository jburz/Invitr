const express = require("express");
const app = express();
const connection = require("./config/connection");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/controller");
app.use(routes);


app.listen(PORT, () => {
    console.log("Server listening on Port: " + PORT);
});

connection();