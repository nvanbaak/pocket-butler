const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {
    var Day = sequelize.define("Day", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      hours: {
        type: DataTypes.INTEGER,
        allowNull: false,
        len: [1]
      }
    });
  
    Day.associate = function(models) {
      Day.belongsTo(models.Week, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Day;
  };