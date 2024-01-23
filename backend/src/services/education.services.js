const { CustomError, checkPermissions } = require("../helpers");
const prisma = require("./db");

const createEducation = async ({
  reqUser,
  userId,
  schoolName,
  degree,
  startDate,
  endDate,
}) => {
  try {
    checkPermissions(reqUser, userId);

    const education = await prisma.education.create({
      data: { schoolName, degree, startDate, endDate, personId: userId },
    });

    return education;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAllEducation = async ({ userId, reqUser }) => {
  try {
    checkPermissions(reqUser, userId);

    const allEducation = await prisma.education.findMany({
      where: { personId: userId },
    });

    return allEducation;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndUpdateEducation = async ({
  userId,
  reqUser,
  educationId,
  schoolName,
  degree,
  startDate,
  endDate,
}) => {
  try {
    checkPermissions(reqUser, userId);

    const updatedEducation = await prisma.education.update({
      where: { id: educationId },
      data: { schoolName, degree, startDate, endDate },
    });

    return updatedEducation;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteEducation = async ({ userId, reqUser, educationId }) => {
  try {
    checkPermissions(reqUser, userId);

    const deletedEducation = await prisma.education.delete({
      where: { id: educationId },
    });

    return deletedEducation;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = {
  createEducation,
  findAllEducation,
  findAndUpdateEducation,
  findAndDeleteEducation,
};
