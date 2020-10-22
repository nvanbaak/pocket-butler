module.exports = function (sequelize, DataTypes) {
  var Day = sequelize.define("Day", {
    // userid: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
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
