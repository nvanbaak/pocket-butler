module.exports = function (sequelize, DataTypes) {
  var Week = sequelize.define("Week", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sunday: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monday: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tuesday: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wednesday: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    thursday: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    friday: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    saturday: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // Week.associate = function(models) {
  //   Week.hasMany(models.Day, {
  //     onDelete: "cascade"
  //   }); 
  // };

  return Week;
};