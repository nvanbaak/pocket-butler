module.exports = function(sequelize, DataTypes) {
    var Day = sequelize.define('Day', {
        //add properties here
        //ex: name: DataTypes.STRING
    });

    Day.associate = function(models){
        // add associations here
        // ex: Day.hasMany(models.BlogPost)
    };
    return Day;
}