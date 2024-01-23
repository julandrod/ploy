const { CustomError, checkPermissions } = require("../helpers");
const prisma = require("./db");

const createLanguage = async ({ reqUser, userId, name, level }) => {
  try {
    checkPermissions(reqUser, userId);

    const language = await prisma.language.create({
      data: { name, level, personId: userId },
    });

    return language;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAllLanguages = async ({ userId, reqUser }) => {
  try {
    checkPermissions(reqUser, userId);

    const allLanguages = await prisma.language.findMany({
      where: { personId: userId },
    });

    return allLanguages;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndUpdateLanguage = async ({
  userId,
  reqUser,
  languageId,
  name,
  level,
}) => {
  try {
    checkPermissions(reqUser, userId);

    const updatedLanguage = await prisma.language.update({
      where: { id: languageId },
      data: { name, level },
    });

    return updatedLanguage;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteLanguage = async ({ userId, reqUser, languageId }) => {
  try {
    checkPermissions(reqUser, userId);

    const deletedLanguage = await prisma.language.delete({
      where: { id: languageId },
    });

    return deletedLanguage;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = {
  createLanguage,
  findAllLanguages,
  findAndUpdateLanguage,
  findAndDeleteLanguage,
};
