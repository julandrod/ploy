const { CustomError, checkPermissions } = require("../helpers");
const prisma = require("./db");

const createHobby = async ({ reqUser, userId, hobby }) => {
  try {
    checkPermissions(reqUser, userId);

    const newHobby = await prisma.hobbies.create({
      data: { hobby, personId: userId },
    });

    return newHobby;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAllHobbies = async ({ userId, reqUser }) => {
  try {
    checkPermissions(reqUser, userId);

    const allHobbies = await prisma.hobbies.findMany({
      where: { personId: userId },
    });

    return allHobbies;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndUpdateHobby = async ({ userId, reqUser, hobbyId, hobby }) => {
  try {
    checkPermissions(reqUser, userId);

    const updatedHobby = await prisma.hobbies.update({
      where: { id: hobbyId },
      data: { hobby },
    });

    return updatedHobby;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteHobby = async ({ userId, reqUser, hobbyId }) => {
  try {
    checkPermissions(reqUser, userId);

    const deletedHobby = await prisma.hobbies.delete({
      where: { id: hobbyId },
    });

    return deletedHobby;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = {
  createHobby,
  findAllHobbies,
  findAndUpdateHobby,
  findAndDeleteHobby,
};
