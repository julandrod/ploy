const router = require("express").Router();
const userCtrls = require("../controllers/users.controllers");
const { authenticateUser } = require("../middlewares");

router
  .route("/:userId")
  .get(authenticateUser, userCtrls.getUserById)
  .put(authenticateUser, userCtrls.putUserById)
  .delete(authenticateUser, userCtrls.deleteUserById);

module.exports = router;
