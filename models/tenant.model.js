module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Tenant", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dob: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        mobileNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        whatsAppNumber: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
}