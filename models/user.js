//require packages and files
const bcrypt = require("bcryptjs");

//create a user model to authenticate
module.exports = function (sequelize, DataTypes) {
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

    //associate user with guests
    User.associate = (models) => {
        User.hasMany(models.GuestList, {
            onDelete: "cascade"
        });
    };

    //method to validate the password - this compares the inputted password against the password in the database.
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    //additional method that will hash the user password before the user is added to the database
    User.addHook("beforeCreate", (user) => {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};