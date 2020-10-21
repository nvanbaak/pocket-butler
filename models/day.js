const { Sequelize } = require(".");
module.exports = function (sequelize, DataTypes) {
  var Day = sequelize.define("Day", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // Choose number 1-7. 1 is Sunday, 7 is Saturday. Used to identify day of week
    name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    // hours: {
    //   type: DataTypes.RANGE(Sequelize.INTEGER),
    //   allowNull: false,
    //   len: [1]
    // }
  });

  // Day.associate = function(models) {
  //   Day.belongsTo(models.Week, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Day;
};
