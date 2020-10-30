//require packages and files
const bcrypt = require("brcyptjs");

//create a user model to authenticate
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        //requires an email address as a login
        email: {
            //string data type, cannot be null, must a unique and an email address
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //password is a string data type and cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    //

};