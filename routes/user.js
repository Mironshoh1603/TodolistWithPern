const router = require("express").Router();
const userController = require("../controllers/user");

router
  .route("/")
  .post(userController.buildUser)
  .get(userController.getAllUsers);
router
  .route("/:id")
  .delete(userController.deleteUser)
  .get(userController.getOne);

module.exports = router;
