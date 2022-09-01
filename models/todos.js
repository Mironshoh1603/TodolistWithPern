const Sequelize = require("sequelize");
const sequelize = require("sequelize");

const todos = sequelize.define(
  "todos",
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    finishedTime: {
      type: Sequelize.DataTypes.DATE,
      default: Date.now() + 24 * 3600 * 1000,
    },
    level: {
      type: Sequelize.DataTypes.ENUM(
        "bajarilgan",
        "bajarilmagan",
        "bajarilmoqda"
      ),
      default: "bajarilmoqda",
    },
  },
  {
    freezeTableName: true,
  }
);

todos.sync({
  alter: true,
});
module.exports = todos;
