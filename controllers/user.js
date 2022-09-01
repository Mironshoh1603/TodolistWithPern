const User = require("../models/user");

// build usuli
const buildUser = async (req, res, next) => {
  try {
    const user = await User.create({
      username: "Umid",
      password: "1234",
      age: 20,
      name: "Mironshoh Asadov",
    });
    res.status(200).json({
      message: "Ok",
      data: user,
    });
  } catch (err) {
    console.log("error:", err);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { user_id: req.params.id } });
    res.status(200).json({
      massage: "O'chdi",
    });
  } catch (err) {
    console.log("Err", err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    let limit = req.query.limit || 10;
    let page = req.query.skip * limit || 0;

    const users = await User.findAll({ offset: page, limit: limit });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};
const getOne = async (req, res) => {
  try {
    const users = await User.findOne({ where: { user_id: req.params.id } });
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { buildUser, deleteUser, getAllUsers, getOne };
