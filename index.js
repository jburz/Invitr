const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./controllers/controller");
app.use(routes);


app.listen(PORT, () => {
    console.log("Server listening on Port: " + PORT);
});