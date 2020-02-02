const router = require("express").Router();
const projectRoutes = require("./projects");

//DB route

router.use("/projects", projectRoutes);

module.exports = router;