module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        //add properties here
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        //   },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            unique:true
        }

    });

    User.associate = function(models){
        // add associations here
        User.hasMany(models.Day, models.Week, models.Task, {
            onDelete: "cascade"
        })
        // ex: User.hasMany(models.BlogPost)
    };
    return User;
}