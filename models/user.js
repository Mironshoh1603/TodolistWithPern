const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const user = sequelize.define(
  "user",
  {
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: { type: Sequelize.DataTypes.STRING, allowNull: false },
    password: { type: Sequelize.DataTypes.STRING },
    age: { type: Sequelize.DataTypes.INTEGER, default: 20 },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

user.sync({
  alter: true,
});

module.exports = user;
