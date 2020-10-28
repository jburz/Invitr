// Set up MYSQL connection
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "weddinginvite_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('Connected');
});

exports.connection = connection;