const { CustomError, checkPermissions } = require("../helpers");
const prisma = require("./db");

const createSocial = async ({ reqUser, userId, name, link }) => {
  try {
    checkPermissions(reqUser, userId);

    const social = await prisma.social.create({
      data: { name, link, personId: userId },
    });

    return social;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAllSocials = async ({ userId, reqUser }) => {
  try {
    checkPermissions(reqUser, userId);

    const allSocials = await prisma.social.findMany({
      where: { personId: userId },
    });

    return allSocials;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndUpdateSocial = async ({
  userId,
  reqUser,
  socialId,
  name,
  link,
}) => {
  try {
    checkPermissions(reqUser, userId);

    const updatedSocial = await prisma.social.update({
      where: { id: socialId },
      data: { name, link },
    });

    return updatedSocial;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteSocial = async ({ userId, reqUser, socialId }) => {
  try {
    checkPermissions(reqUser, userId);

    const deletedSocial = await prisma.social.delete({
      where: { id: socialId },
    });

    return deletedSocial;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = {
  createSocial,
  findAllSocials,
  findAndUpdateSocial,
  findAndDeleteSocial,
};
