const { tryCatchWrapper, endpointResponse } = require("../helpers");
const educationServices = require("../services/education.services");

const postEducation = tryCatchWrapper(async (req, res, next) => {
  const { schoolName, degree, startDate, endDate } = req.body;
  const { userId } = req.params;

  const education = await educationServices.createEducation({
    userId,
    reqUser: req.user,
    schoolName,
    degree,
    startDate,
    endDate,
  });

  endpointResponse({
    res,
    code: 201,
    message: "Educacion agregada de manera exitosa",
    body: { education },
  });
});

const getAllEducation = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  const allEducation = await educationServices.findAllEducation({
    userId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Estudios listados de manera exitosa",
    body: { education: allEducation },
  });
});

const putEducation = tryCatchWrapper(async (req, res, next) => {
  const { userId, educationId } = req.params;
  const { schoolName, degree, startDate, endDate } = req.body;

  const updatedEducation = await educationServices.findAndUpdateEducation({
    userId,
    reqUser: req.user,
    educationId,
    schoolName,
    degree,
    startDate,
    endDate,
  });

  endpointResponse({
    res,
    message: "Estudio actualizado de manera exitosa",
    body: { education: updatedEducation },
  });
});

const deleteEducation = tryCatchWrapper(async (req, res, next) => {
  const { userId, educationId } = req.params;

  const deletedEducation = await educationServices.findAndDeleteEducation({
    userId,
    educationId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Estudio eliminado de manera exitosa",
    body: { education: deletedEducation },
  });
});

module.exports = {
  postEducation,
  getAllEducation,
  putEducation,
  deleteEducation,
};
