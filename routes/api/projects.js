const router = require("express").Router();
const projectController = require("../../controllers/projectController");

// Matches with "/api/projects"
router
  .route("/")
  .get(projectController.findAll)

  // Matches with "/api/posts/:id"
router
.route("/:id")
  .get(projectController.findSpecific)

module.exports = router;
