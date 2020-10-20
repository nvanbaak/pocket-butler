const { Sequelize } = require(".");

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        }
    });
    return User;
};