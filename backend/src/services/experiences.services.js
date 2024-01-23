const { checkPermissions, CustomError } = require("../helpers");
const prisma = require("./db");

const createExperience = async ({
  reqUser,
  userId,
  jobTitle,
  location,
  employer,
  startDate,
  endDate,
  responsibilities,
}) => {
  try {
    checkPermissions(reqUser, userId);

    const experience = await prisma.experience.create({
      data: {
        jobTitle,
        location,
        employer,
        startDate,
        endDate,
        responsibilities,
        personId: userId,
      },
    });

    return experience;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAllExperiences = async ({ userId, reqUser }) => {
  try {
    checkPermissions(reqUser, userId);

    const allExperiences = await prisma.experience.findMany({
      where: { personId: userId },
    });

    return allExperiences;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndUpdateExperience = async ({
  userId,
  reqUser,
  experienceId,
  jobTitle,
  location,
  employer,
  startDate,
  endDate,
  responsibilities,
}) => {
  try {
    checkPermissions(reqUser, userId);

    const updatedExperience = await prisma.experience.update({
      where: { id: experienceId },
      data: {
        jobTitle,
        location,
        employer,
        startDate,
        endDate,
        responsibilities,
      },
    });

    return updatedExperience;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteExperience = async ({ userId, reqUser, experienceId }) => {
  try {
    checkPermissions(reqUser, userId);

    const deletedExperience = await prisma.experience.delete({
      where: { id: experienceId },
    });

    return deletedExperience;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = {
  createExperience,
  findAllExperiences,
  findAndUpdateExperience,
  findAndDeleteExperience,
};
