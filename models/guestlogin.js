// Import an ORM to create functions that will interact with the database

// ORM that works with the Guest Login part of the app
module.exports = function (sequelize, DataTypes) {

    const GuestLogin = sequelize.define("guest_login", {
        auth_email: DataTypes.STRING,
        auth_password: DataTypes.STRING,
    });
    return GuestLogin;
};