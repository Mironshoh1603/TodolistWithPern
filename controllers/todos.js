const Todos = require("./../models/todos");
const { getAll, addOne } = require("./handlerController");
const catchErrorAsync = require("../utility/catchErrorAsync");

const getAllTodos = getAll(Todos);
const addTodos = addOne(Todos);

module.exports = {
  getAllTodos,
  addTodos,
};
