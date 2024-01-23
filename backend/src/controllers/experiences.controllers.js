const { tryCatchWrapper, endpointResponse } = require("../helpers");
const experienceServices = require("../services/experiences.services");

const postExperience = tryCatchWrapper(async (req, res, next) => {
  const { jobTitle, employer, startDate, endDate } = req.body;
  const { userId } = req.params;

  const experience = await experienceServices.createExperience({
    reqUser: req.user,
    userId,
    jobTitle,
    employer,
    startDate,
    endDate,
  });

  endpointResponse({
    res,
    code: 201,
    message: "Experiencia agregada de manera exitosa",
    body: { experience },
  });
});

const getAllExperiences = tryCatchWrapper(async (req, res, next) => {
  const { userId } = req.params;
  const allExperiences = await experienceServices.findAllExperiences({
    userId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Experiencias listadas de manera exitosa",
    body: { experience: allExperiences },
  });
});

const putExperience = tryCatchWrapper(async (req, res, next) => {
  const { userId, experienceId } = req.params;
  const { jobTitle, location, employer, startDate, endDate, responsibilities } =
    req.body;

  const updatedExperience = await experienceServices.findAndUpdateExperience({
    userId,
    reqUser: req.user,
    experienceId,
    jobTitle,
    location,
    employer,
    startDate,
    endDate,
    responsibilities,
  });

  endpointResponse({
    res,
    message: "Experiencia actualizada de manera exitosa",
    body: { experience: updatedExperience },
  });
});

const deleteExperience = tryCatchWrapper(async (req, res, next) => {
  const { userId, experienceId } = req.params;

  const deletedExperience = await experienceServices.findAndDeleteExperience({
    userId,
    experienceId,
    reqUser: req.user,
  });

  endpointResponse({
    res,
    message: "Experiencia eliminada de manera exitosa",
    body: { experience: deletedExperience },
  });
});

module.exports = {
  postExperience,
  getAllExperiences,
  putExperience,
  deleteExperience,
};
