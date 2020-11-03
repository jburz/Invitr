// ORM that works with the Guest List part of the app

module.exports = function (sequelize, DataTypes) {
    const GuestList = sequelize.define("GuestList", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        street_address: DataTypes.STRING,
        city_address: DataTypes.STRING,
        zip_code: DataTypes.STRING,
        state_address: DataTypes.STRING,
        food_restriction: DataTypes.BOOLEAN,
        food_restriction_details: DataTypes.STRING,
        additional_guests: DataTypes.INTEGER,
        email: DataTypes.STRING,
        invited: DataTypes.BOOLEAN,
        rsvp: DataTypes.BOOLEAN,
        comment: DataTypes.STRING,
    }
    );

    GuestList.associate = (models) => {
        GuestList.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return GuestList;
};

