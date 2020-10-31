//Passport operates on strategies
//We can use the local strategy to authenticate a user name and password

//require packages and files
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

//local strategy to authenticate user
passport.use(new LocalStrategy(
    {
        username: "email"
    },
    //function that attempts login against username and password in db
    (email, password, done) => {
        //need a user model here to access the table in the database
        db.User.findOne({
            where: {
                email: email
            }
        }).then((dbUser) => {
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            return done(null, dbUser);
        });
    }
));

//Boilerplate code to keep authentication across state HTTP requests with sequelize
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

//export configured passport
module.exports = passport;