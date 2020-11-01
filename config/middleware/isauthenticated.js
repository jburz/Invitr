//Restrict routes a user can access if authentication fail
module.exports = (req, res, next) => {
    //allow navigation to page if user is logged in
    if (req.user) {
        return next();
    }
    //other redirect to login
    return res.redirect("/login");
};