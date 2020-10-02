const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects"
router
  .route("/")
  .get(projectController.findAll)

module.exports = router;
