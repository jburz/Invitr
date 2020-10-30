//require packages and files
const bcrypt = require("brcyptjs");

//create a user model to authenticate
module.exports = (sequelize, DataTypes) => {
    console.log("hit create user");
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
    //method to validate the password - this compares the inputted password against the password in the database.
    User.prototype.validPassword = (password) => {
        return bcrypt.compareSync(password, thispassword);
    };

    //additional method that will hash the user password before the user is added to the database
    User.addHook("beforeCreate", (user) => {
        user.password = brcypt.hashSync(user.password, brcrypt.genSaltSync(10), null);
    });
};