const db = require(".");

module.exports = function(sequelize, DataTypes) {
    const Week = sequelize.define("Week", {
        // date: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        days: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    });

    Week.associate = function(models) {
        Week.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Week;
};