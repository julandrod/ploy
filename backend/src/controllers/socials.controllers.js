const { tryCatchWrapper, endpointResponse } = require("../helpers");
const socialServices = require("../services/socials.services");

const postSocial = tryCatchWrapper(async (req, res, next) => {
  const { name, link } = req.body;
  const { userId } = req.params;

  const social = await socialServices.createSocial({
    userId,
    reqUser: req.user,
    name,
    link,
  });

  endpointResponse({
    res,
    code: 201,
    message: "Red social agregada de manera exitosa",
    body: { social },
  });
});

const getAllSocials = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  const allSocials = await socialServices.findAllSocials({
    userId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Redes sociales listadas de manera exitosa",
    body: { social: allSocials },
  });
});

const putSocial = tryCatchWrapper(async (req, res, next) => {
  const { userId, socialId } = req.params;
  const { name, link } = req.body;

  const updatedSocial = await socialServices.findAndUpdateSocial({
    userId,
    reqUser: req.user,
    socialId,
    name,
    link,
  });

  endpointResponse({
    res,
    message: "Red social actualizada de manera exitosa",
    body: { social: updatedSocial },
  });
});

const deleteSocial = tryCatchWrapper(async (req, res, next) => {
  const { userId, socialId } = req.params;

  const deletedSocial = await socialServices.findAndDeleteSocial({
    userId,
    socialId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Red social eliminada de manera exitosa",
    body: { social: deletedSocial },
  });
});

module.exports = {
  postSocial,
  getAllSocials,
  putSocial,
  deleteSocial,
};
