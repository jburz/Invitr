// ORM that works with the Guest List part of the app
const Sequelize = require("sequelize");

const sequelize = require("../config/connection.js");

const GuestList = sequelize.define("guest_list", {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    street_address: Sequelize.STRING,
    city_address: Sequelize.STRING,
    zip_code: Sequelize.STRING,
    state_address: Sequelize.STRING,
    food_restriction: Sequelize.BOOLEAN,
    food_restriction_details: Sequelize.STRING,
    additional_guests: Sequelize.INTEGER,
    email: Sequelize.STRING,
    invited: Sequelize.BOOLEAN,
    rsvp: Sequelize.BOOLEAN,
    comment: Sequelize.STRING,
    createdAt: {
        type: "DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3)"
    },
    updatedAt: {
        type: "DATETIME(3) DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)"
    }
});

GuestList.sync();

module.exports = GuestList;