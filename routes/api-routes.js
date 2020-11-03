// Create routes and set up logic within those routes when required
const db = require("../models");

// Provide a list of all people currently on the guest list
module.exports = function (app) {
    app.get("/api/all", (req, res) => {
        db.GuestList.findAll({}).then((results) => {
            res.json(results);
        });
    });
    app.post("/api/newGuest", (req, res) => {
        db.GuestList.create({ 
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            phone_number: req.body.phoneNumber,
            street_address: req.body.streetAddress,
            city_address: req.body.cityAddress,
            zip_code: req.body.zipAddress,
            state_address: req.body.stateAddress,
            food_restriction: req.body.foodRestrictBool,
            food_restriction_details: req.body.foodRestrictText,
            additional_guests: req.body.additionalGuests,
            email: req.body.email,
            invited: req.body.invited,
            rsvp: req.body.rsvp,
            comment: req.body.comment
        });
        res.json(results);
    });
};