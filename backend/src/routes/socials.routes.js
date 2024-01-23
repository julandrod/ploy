const router = require("express").Router();
const socialsCtrls = require("../controllers/socials.controllers");
const { authenticateUser } = require("../middlewares");

router
  .route("/:userId")
  .post(authenticateUser, socialsCtrls.postSocial)
  .get(authenticateUser, socialsCtrls.getAllSocials);

router
  .route("/:userId/:socialId")
  .put(authenticateUser, socialsCtrls.putSocial)
  .delete(authenticateUser, socialsCtrls.deleteSocial);

module.exports = router;
