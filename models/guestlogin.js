// Import an ORM to create functions that will interact with the database

// ORM that works with the Guest Login part of the app
const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

const GuestLogin = sequelize.define("guest_login", {
    auth_email: Sequelize.STRING,
    auth_password: Sequelize.STRING,
    createdAt: {
        type: "DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3)"
    },
    updatedAt: {
        type: "DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
    }
});

GuestLogin.sync();

module.exports = GuestLogin;