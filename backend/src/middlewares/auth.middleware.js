const { isTokenValid, CustomError, tryCatchWrapper } = require("../helpers");

const authenticateUser = tryCatchWrapper(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new CustomError("No hay un token presente", 401);
  }

  const token = authHeader.split(" ")[1];
  try {
    const payloadDecoded = isTokenValid(token);
    req.user = { ...payloadDecoded };
    next();
  } catch (error) {
    throw new CustomError("Not valid token", 401);
  }
});

const authorizeByRole = (role) => {
  return tryCatchWrapper(async (req, res, next) => {
    if (req.user.role !== role) {
      throw new CustomError("No tiene permiso para acceder a esta ruta", 401);
    }
    next();
  });
};

module.exports = { authenticateUser, authorizeByRole };
