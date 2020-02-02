const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

router.route("/")
    .get(soapsController.findAll);

module.exports = router;