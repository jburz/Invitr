const express = require("express");
const app = express();
const connection = require("./config/connection");

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Server listening on Port: " + PORT);
});

connection();