const {
  CustomError,
  encryptPassword,
  comparePassword,
  createJwt,
} = require("../helpers");
const prisma = require("./db");

const createUser = async ({ email, password, firstName, lastName }) => {
  try {
    const alreadyRegister = await prisma.user.findUnique({ where: { email } });
    if (alreadyRegister) {
      throw new CustomError("El usuario ya se encuentra registrado", 400);
    }
    const hashpassword = await encryptPassword(password);
    const newUser = await prisma.user.create({
      data: {
        password: hashpassword,
        email,
        firstName,
        lastName,
      },
      select: {
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    return newUser;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const findAndLogin = async ({ email, password }) => {
  try {
    console.log(password);
    const userFound = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        birthdate: true,
        phone: true,
        location: true,
        identification: true,
        profilePicture: true,
        aboutMe: true,
        education: true,
        experience: true,
        languages: true,
        socials: true,
        Hobbies: true,
      },
    });
    console.log(userFound)
    if (!userFound) {
      throw new CustomError(
        "No se encontro ningun usuario con este email",
        404
      );
    }
    const passwordMatch = await comparePassword(password, userFound.password);
    if (!passwordMatch) {
      throw new CustomError("Password incorrecto", 400);
    }
    const token = createJwt({
      payload: { id: userFound.id, role: userFound.role },
    });

    return {
      id: userFound.id,
      firstName: userFound.firstName,
      lastName: userFound.lastName,
      email: userFound.email,
      birthdate: userFound.birthdate,
      phone: userFound.phone,
      location: userFound.location,
      identification: userFound.identification,
      profilePicture: userFound.profilePicture,
      aboutMe: userFound.aboutMe,
      education: userFound.education,
      experience: userFound.experience,
      languages: userFound.languages,
      socials: userFound.socials,
      Hobbies: userFound.Hobbies,
      token,
    };
  } catch (error) {
    console.log(error);
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

const showMyInfo = async ({ userId }) => {
  try {
    const myInfo = await prisma.user.findFirstOrThrow({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        birthdate: true,
        phone: true,
        location: true,
        identification: true,
        profilePicture: true,
        aboutMe: true,
        education: true,
        experience: true,
        languages: true,
        socials: true,
        Hobbies: true,
      },
    });

    return myInfo;
  } catch (error) {
    throw new CustomError(error.message, error.statusCode, error.errors);
  }
};

module.exports = { createUser, findAndLogin, showMyInfo };
