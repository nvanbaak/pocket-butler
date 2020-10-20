module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define('Task', {
        //add properties here
        //ex: name: DataTypes.STRING
    });

    Task.associate = function(models){
        // add associations here
        // ex: Task.hasMany(models.BlogPost)
    };
    return Task;
}