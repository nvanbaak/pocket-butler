module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    var Week = sequelize.define('Week', {
        //add properties here
        name: DataTypes.INTEGER
        //ex: name: DataTypes.STRING
    });

    Week.associate = function(models){
        Week.hasMany(models.Day, {
            onDelete:"cascade"
        })
        // add associations here
        // ex: Week.hasMany(models.BlogPost)
    };
    return Week;
=======
  var Week = sequelize.define("Week", {
    name: DataTypes.RANGE(Sequelize.DATEONLY)
  });

  Week.associate = function(models) {
    Week.hasMany(models.Day, {
      onDelete: "cascade"
    }); 
  };

  return Week;
>>>>>>> dev
};