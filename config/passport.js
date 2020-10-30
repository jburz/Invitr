//Passport operates on strategies
//We can use the local strategy to authenticate a user name and password

//require packages and files
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(
    {
        username: "username"
    },
    //function that attempts login against username and password in db
    (username, password, done) => {
        //need a user model here to access the table in the database
        console.log(username);
        console.log(password);
        console.log(done);
    }
));

//Boilerplate code to keep authentication across state HTTP requests with sequelize
passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) {
    cb(null, obj);
});

//export configured passport
module.exports = passport;