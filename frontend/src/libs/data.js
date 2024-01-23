import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

/**
 * Method to register a new user
 * @param {Object} User User info
 * @param {String} User.name User name
 * @param {String} User.lastName User last name
 * @param {String} User.email User email
 * @param {String} User.password User password
 * @returns {String} User code if successful, error message if not
 */
export const registerUser = async ({
  firstName,
  lastName,
  email,
  password,
}) => {
  console.log("register");
  try {
    const { data } = await instance.post("/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });
    return data;
  } catch (error) {
    return error.response.data.error;
  }
};

/**
 * Method to get the current user info
 * @param {Object} Token JWT token
 * @param {String} Token.accessToken User JWT access token
 * @returns {Object | String} User info if successful, error message if not
 */
export const fetchMyInfo = async ({ accessToken }) => {
  try {
    const { data } = await instance.get("/auth/showme", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data.body;
  } catch (error) {
    return error.response.data.error;
  }
};

const updateUser = async ({
  accessToken,
  id,
  email,
  firstName,
  lastName,
  birthdate,
  phone,
  location,
  identification,
  profilePicture,
  aboutMe,
}) => {
  try {
    const { data } = await instance.put(
      `/users/${id}`,
      {
        email,
        firstName,
        lastName,
        birthdate,
        phone,
        location,
        identification,
        profilePicture,
        aboutMe,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return data;
  } catch (error) {
    return error.response.data.error;
  }
};
