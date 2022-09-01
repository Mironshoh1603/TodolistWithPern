const router = require("express").Router();
const todoController = require("../controllers/todos");

router.route("/").post(todoController.addTodos).get(todoController.getAllTodos);
// router
//   .route("/:id")
//   .delete(userController.deleteUser)
//   .get(userController.getOne);

module.exports = router;
