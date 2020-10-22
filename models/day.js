module.exports = function(sequelize, DataTypes) {
    const Day = sequelize.define("Day", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    Day.associate = function(models) {
        Day.belongsTo(models.Week, {
            foreignKey: {
                allowNull: false
            }
        });
        Day.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Day;
};
