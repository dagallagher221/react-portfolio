const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

router.route("/")
    .get(projectsController.findAll);

module.exports = router;