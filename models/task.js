module.exports = function(sequelize, DataTypes) {
    const Task = sequelize.define("Task", {
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
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                len: [1, 140]
            }
        },
        autoschedule: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        reoccurring: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        timeToComplete: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        //   might need to change to compare easier to calendar

        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Task.associate = function(models) {
        Task.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Task;
}