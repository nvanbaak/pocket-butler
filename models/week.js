module.exports = function(sequelize, DataTypes) {
  var Week = sequelize.define("Week", {
    name: DataTypes.RANGE(Sequelize.DATEONLY)
  });

  Week.associate = function(models) {
    Week.hasMany(models.Day, {
      onDelete: "cascade"
    }); 
  };

  return Week;
};