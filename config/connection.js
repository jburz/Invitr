// Set up MYSQL connection using sequelize
const Sequelize = require("sequelize");

const sequelize = new Sequelize("weddinginvite_db", "root", "fishsticks420", {
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