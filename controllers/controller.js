// Create routes and set up logic within those routes when required
const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

// Export routes for index.js to use
module.exports = router;