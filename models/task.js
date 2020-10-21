module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        //   might need to change to compare easier to calendar
        deadline: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        autoschedule: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        timeToComplete: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        //   might need to change to compare easier to calendar
        startline: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Task.associate = function (models) {
        // add associations here
        // ex: Task.hasMany(models.BlogPost)
    };
    return Task;
};