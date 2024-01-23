const router = require("express").Router();
const hobbiesCtrls = require("../controllers/hobbies.controllers");
const { authenticateUser } = require("../middlewares");

router
  .route("/:userId")
  .post(authenticateUser, hobbiesCtrls.postHobby)
  .get(authenticateUser, hobbiesCtrls.getAllHobbies);

router
  .route("/:userId/:hobbyId")
  .put(authenticateUser, hobbiesCtrls.putHobby)
  .delete(authenticateUser, hobbiesCtrls.deleteHobby);

module.exports = router;
