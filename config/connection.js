// Set up MYSQL connection using sequelize
var Sequelize = require("sequelize");

var sequelize = new Sequelize("weddinginvite_db", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Exports the connection
module.exports = sequelize;