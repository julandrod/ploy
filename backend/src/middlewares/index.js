const { authenticateUser, authorizeByRole } = require("./auth.middleware");
const errorMiddleware = require("./errors.middleware");
const notFoundMiddleware = require("./notFound.middleware");
const validatorMiddleware = require("./validator.middleware");
const validateEndpoint = require("./validateEndpoint.middleware");

module.exports = {
  authenticateUser,
  authorizeByRole,
  errorMiddleware,
  notFoundMiddleware,
  validatorMiddleware,
  validateEndpoint,
};
