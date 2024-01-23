const router = require("express").Router();
const educationCtrls = require("../controllers/education.controllers");
const { authenticateUser } = require("../middlewares");

router
  .route("/:userId")
  .post(authenticateUser, educationCtrls.postEducation)
  .get(authenticateUser, educationCtrls.getAllEducation);

router
  .route("/:userId/:educationId")
  .put(authenticateUser, educationCtrls.putEducation)
  .delete(authenticateUser, educationCtrls.deleteEducation);

module.exports = router;
