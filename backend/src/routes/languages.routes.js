const router = require("express").Router();
const languageCtrls = require("../controllers/languages.controllers");
const { authenticateUser } = require("../middlewares");

router
  .route("/:userId")
  .post(authenticateUser, languageCtrls.postLanguage)
  .get(authenticateUser, languageCtrls.getAllLanguages);

router
  .route("/:userId/:languageId")
  .put(authenticateUser, languageCtrls.putLanguage)
  .delete(authenticateUser, languageCtrls.deleteLanguage);

module.exports = router;
