// Set up MYSQL connection
const Connection = function () {
    const mysql = require("mysql");

    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "fishsticks420",
        database: "weddinginvite_db"
    });

    connection.connect((err) => {
        if (err) { throw err; }
        console.log("Connected");
    });
};

module.exports = Connection;