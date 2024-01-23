const { CustomError, checkPermissions } = require("../helpers");
const prisma = require("./db");

const createInfo = async ({ modelName, reqUser, userId, info }) => {
  try {
    checkPermissions(reqUser, userId);

    const newInfo = await prisma[modelName].create({
      data: { ...info, personId: userId },
    });

    return newInfo;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findSingleInfo = async ({ modelName, infoId, reqUser, userId }) => {
  try {
    checkPermissions(reqUser, userId);

    const singleInfo = await prisma[modelName].findUnique({
      where: { id: infoId },
    });

    return singleInfo;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAllInfo = async ({ modelName, infoId, reqUser, userId }) => {
  try {
    checkPermissions(reqUser, userId);

    const allInfo = await prisma[modelName].findMany({
      where: { personId: userId },
    });

    return allInfo;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndUpdateInfo = async ({ modelName, userId, reqUser, info }) => {
  try {
    checkPermissions(reqUser, userId);

    const updatedInfo = await prisma[modelName].update({
      where: { id: infoId },
      data: { ...info },
    });

    return updatedInfo;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteInfo = async ({ modelName, infoId, reqUser, userId }) => {
  try {
    checkPermissions(reqUser, userId);

    const deletedInfo = await prisma[modelName].delete({
      where: { id: infoId },
    });

    return deletedInfo;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = {
  createInfo,
  findAllInfo,
  findSingleInfo,
  findAndUpdateInfo,
  findAndDeleteInfo,
};
