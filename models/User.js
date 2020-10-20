module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        //add properties here
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        phone: DataTypes.STRING,
        email:{
            type: DataTypes.STRING,
            unique:true
        }

        //ex: name: DataTypes.STRING
    });

    User.associate = function(models){
        // add associations here
        // ex: User.hasMany(models.BlogPost)
    };
    return User;
}