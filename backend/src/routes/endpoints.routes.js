const { authenticateUser, validateEndpoint } = require("../middlewares");
const endpointCtrls = require("../controllers/endpoints.controllers");

const router = require("express").Router();

router
  .route("/:endpoint/:userId")
  .all(validateEndpoint, authenticateUser)
  .post(endpointCtrls.postInfo)
  .get(endpointCtrls.getAllInfo);

router
  .route("/:endpoint/:userId/:infoId")
  .all(validateEndpoint, authenticateUser)
  .get(endpointCtrls.getInfoById)
  .put(endpointCtrls.putInfo)
  .delete(endpointCtrls.deleteInfo);

module.exports = router;
