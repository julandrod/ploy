const { tryCatchWrapper, endpointResponse } = require("../helpers");
const languagesServices = require("../services/languages.services");

const postLanguage = tryCatchWrapper(async (req, res, next) => {
  const { name, level } = req.body;
  const { userId } = req.params;

  const language = await languagesServices.createLanguage({
    userId,
    reqUser: req.user,
    name,
    level,
  });

  endpointResponse({
    res,
    code: 201,
    message: "Idioma agregado de manera exitosa",
    body: { language },
  });
});

const getAllLanguages = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  const allLanguages = await languagesServices.findAllLanguages({
    userId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Idiomas listados de manera exitosa",
    body: { language: allLanguages },
  });
});

const putLanguage = tryCatchWrapper(async (req, res, next) => {
  const { userId, languageId } = req.params;
  const { name, level } = req.body;

  const updatedLanguage = await languagesServices.findAndUpdateLanguage({
    userId,
    reqUser: req.user,
    languageId,
    name,
    level,
  });

  endpointResponse({
    res,
    message: "Idioma actualizado de manera exitosa",
    body: { language: updatedLanguage },
  });
});

const deleteLanguage = tryCatchWrapper(async (req, res, next) => {
  const { userId, languageId } = req.params;

  const deletedLanguage = await languagesServices.findAndDeleteLanguage({
    userId,
    languageId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Idioma eliminado de manera exitosa",
    body: { language: deletedLanguage },
  });
});

module.exports = {
  postLanguage,
  getAllLanguages,
  putLanguage,
  deleteLanguage,
};
