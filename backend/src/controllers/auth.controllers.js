const { tryCatchWrapper, endpointResponse } = require("../helpers");
const authServices = require("../services/auth.services");

const registerUser = tryCatchWrapper(async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  const registerUser = await authServices.createUser({
    email,
    password,
    firstName,
    lastName,
  });

  endpointResponse({
    res,
    code: 201,
    message: "Usuario registrado exitosamente!",
    body: registerUser,
  });
});

const loginUser = tryCatchWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  const infoUser = await authServices.findAndLogin({ email, password });

  endpointResponse({
    res,
    message: "Login exitoso!",
    body: { ...infoUser },
  });
});

const getMyInfo = tryCatchWrapper(async (req, res, next) => {
  const { id: userId } = req.user;
  const myInfo = await authServices.showMyInfo({ userId });

  endpointResponse({
    res,
    message: "Mi informacion",
    body: { myInfo },
  });
});

module.exports = { registerUser, loginUser, getMyInfo };
