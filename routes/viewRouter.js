const router = require("express").Router();
const viewController = require("../controllers/viewController");

router.route("/").get(viewController.indexRender);

module.exports = router;
