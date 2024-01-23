const CustomError = require("./errorResponse");

const checkPermissions = (reqUser, resourceUserId) => {
  if (reqUser.role === "ADMIN") return;
  if (reqUser.id === resourceUserId) return;

  throw new CustomError("No tiene permiso para acceder a esta ruta", 401);
};

module.exports = checkPermissions;
