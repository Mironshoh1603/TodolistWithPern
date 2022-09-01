const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const user = sequelize.define(
  "user",
  {
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
  force: true,
});

module.exports = user;
