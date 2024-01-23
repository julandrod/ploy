const { tryCatchWrapper, endpointResponse } = require("../helpers");
const hobbiesServices = require("../services/hobbies.services");

const postHobby = tryCatchWrapper(async (req, res, next) => {
  const { hobby } = req.body;
  const { userId } = req.params;

  const newHobby = await hobbiesServices.createHobby({
    userId,
    reqUser: req.user,
    hobby,
  });

  endpointResponse({
    res,
    code: 201,
    message: "Hobby agregado de manera exitosa",
    body: { hobbies: newHobby },
  });
});

const getAllHobbies = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  const allHobbies = await hobbiesServices.findAllHobbies({
    userId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Hobbies listados de manera exitosa",
    body: { hobbies: allHobbies },
  });
});

const putHobby = tryCatchWrapper(async (req, res, next) => {
  const { userId, hobbyId } = req.params;
  const { hobby } = req.body;

  const updatedHobby = await hobbiesServices.findAndUpdateHobby({
    userId,
    reqUser: req.user,
    hobbyId,
    hobby,
  });

  endpointResponse({
    res,
    message: "Hobby actualizado de manera exitosa",
    body: { hobbies: updatedHobby },
  });
});

const deleteHobby = tryCatchWrapper(async (req, res, next) => {
  const { userId, hobbyId } = req.params;

  const deletedHobby = await hobbiesServices.findAndDeleteHobby({
    userId,
    hobbyId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Hobby eliminado de manera exitosa",
    body: { hobbies: deletedHobby },
  });
});

module.exports = {
  postHobby,
  getAllHobbies,
  putHobby,
  deleteHobby,
};
