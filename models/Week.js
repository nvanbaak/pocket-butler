module.exports = function(sequelize, DataTypes) {
    var Week = sequelize.define('Week', {
        //add properties here
        name: DataTypes.RANGE(Sequelize.DATEONLY)
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
};