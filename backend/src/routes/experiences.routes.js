const router = require("express").Router();
const { authenticateUser } = require("../middlewares");
const experienceCtrls = require("../controllers/experiences.controllers");

router
  .route("/:userId")
  .post(authenticateUser, experienceCtrls.postExperience)
  .get(authenticateUser, experienceCtrls.getAllExperiences);

router
  .route("/:userId/:experienceId")
  .put(authenticateUser, experienceCtrls.putExperience)
  .delete(authenticateUser, experienceCtrls.deleteExperience);

module.exports = router;
