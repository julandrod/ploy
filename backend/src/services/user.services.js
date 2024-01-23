const { CustomError, checkPermissions } = require("../helpers");
const prisma = require("./db");

const selectedFields = {
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  birthdate: true,
  phone: true,
  location: true,
  identification: true,
  profilePicture: true,
  aboutMe: true,
  role: true,
};

const findSingleUser = async ({ userId }) => {
  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: selectedFields,
    });

    return user;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndUpdateUser = async ({
  userId,
  reqUser,
  email,
  firstName,
  lastName,
  birthdate,
  phone,
  location,
  identification,
  profilePicture,
  aboutMe
}) => {
  try {
    checkPermissions(reqUser, userId);

    const udpatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        email,
        firstName,
        lastName,
        birthdate,
        phone,
        location,
        identification,
        profilePicture,
        aboutMe
      },
      select: selectedFields,
    });

    return udpatedUser;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndDeleteUser = async ({ userId, reqUser }) => {
  try {
    checkPermissions(reqUser, userId);

    const deletedUser = await prisma.user.delete({
      where: { id: userId },
      select: selectedFields,
    });

    return deletedUser;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = { findSingleUser, findAndUpdateUser, findAndDeleteUser };
