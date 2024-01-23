const { tryCatchWrapper, endpointResponse } = require("../helpers");
const userServices = require("../services/user.services");

const getUserById = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  const user = await userServices.findSingleUser({ userId });

  endpointResponse({
    res,
    message: "Usuario encontrado de manera exitosa",
    body: { user },
  });
});

const putUserById = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  const {
    email,
    firstName,
    lastName,
    birthdate,
    phone,
    location,
    identification,
    profilePicture,
    aboutMe,
  } = req.body;
  await userServices.findSingleUser({ userId });
  const userUpdated = await userServices.findAndUpdateUser({
    userId,
    reqUser: req.user,
    email,
    firstName,
    lastName,
    birthdate,
    phone,
    location,
    identification,
    profilePicture,
    aboutMe,
  });

  endpointResponse({
    res,
    message: "Usuario actualizado de manera exitosa",
    body: { user: userUpdated },
  });
});

const deleteUserById = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  await userServices.findSingleUser({ userId });
  const userDeleted = await userServices.findAndDeleteUser({
    userId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Usuario eliminado de manera exitosa",
    body: { userDeleted },
  });
});

module.exports = { getUserById, putUserById, deleteUserById };
