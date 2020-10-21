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
        type: DataTypes.RANGE(Sequelize.INTEGER),
        allowNull: false,
        len: [1]
      }
    });
<<<<<<< HEAD

    Day.associate = function(models) {
        // add associations here
        // ex: Day.hasMany(models.BlogPost)
=======
  
    Day.associate = function(models) {
      Day.belongsTo(models.Week, {
        foreignKey: {
          allowNull: false
        }
      });
>>>>>>> 22ab0a8673183f2aae43c8c0d291b4f0d152011b
    };
  
    return Day;
  };