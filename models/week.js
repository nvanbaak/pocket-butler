module.exports = function(sequelize, DataTypes) {
    var Week = sequelize.define('Week', {
        //add properties here
        //ex: name: DataTypes.STRING
    });
  
    Week.associate = function(models) {
      Week.hasMany(models.Day, {
        onDelete: "cascade"
      }); 

    };
    return Week;
}