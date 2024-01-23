const { CustomError } = require("../helpers");

/**
 * Throw a custom error if the route is not found
 *
 * @param {Request} req Request object
 * @param {Response} res Response object
 * @param {Next} next Next middleware function
 *
 */
const notFoundMiddleware = (req, res, next) => {
  throw new CustomError("No se encontro esta ruta", 404);
};

module.exports = notFoundMiddleware;