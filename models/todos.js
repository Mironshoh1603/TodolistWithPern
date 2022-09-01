const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const todos = sequelize.define(
  "todos",
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },

    level: {
      type: Sequelize.DataTypes.ENUM("pending", "succes", "failed"),
      defaultValue: "pending",
    },
    startTime: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Date.now(),
    },
    finishedTime: {
      type: Sequelize.DataTypes.DATE,
      defaultValue: Date.now() + 24 * 3600 * 1000,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

todos.sync({
  allow: true,
});
module.exports = todos;
