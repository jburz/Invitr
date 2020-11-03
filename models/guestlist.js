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
        food_restriction: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        food_restriction_details: DataTypes.STRING,
        additional_guests: {
            type: DataTypes.INTEGER,
            default: 0
        },
        email: {
            type: DataTypes.STRING,
        },
        invited: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        rsvp: {
            type: DataTypes.BOOLEAN,
            default: false
        },
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

