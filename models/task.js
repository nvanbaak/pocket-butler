module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140]
        }
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Task;
  };