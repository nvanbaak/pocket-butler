module.exports = function(sequelize, DataTypes) {
    var Day = sequelize.define('Day', {
        //add properties here
      name:{
          type: DataTypes.STRING,
          allowNull: false,
          validate:{
              len:[1]
          }
      },
      hours:{
          type: DataTypes.RANGE(Sequelize.INTEGER),
          allowNull: false,
          len:[1]
      }
    });

    Day.associate = function(models){
        Day.belongsTo(models.Week, {
            foreignKey:{
                allowNull:false
            }
        });
        // add associations here
        // ex: Day.hasMany(models.BlogPost)
    };
    return Day;
}