module.exports = function(sequelize, DataTypes) {
    var Week = sequelize.define('Week', {
        //add properties here
        //ex: name: DataTypes.STRING
    });

    Week.associate = function(models){
        // add associations here
        // ex: Week.hasMany(models.BlogPost)
    };
    return Week;
}