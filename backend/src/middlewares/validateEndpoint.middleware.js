const { tryCatchWrapper, CustomError } = require("../helpers");

const validEndpoints = [
  "education",
  "experience",
  "hobbies",
  "language",
  "social",
];

const validateEndpoint = tryCatchWrapper(async (req, res, next) => {
  const { endpoint } = req.params;

  if (!validEndpoints.includes(endpoint)) {
    throw new CustomError("Endpoint no valido", 400);
  }

  next();
});

module.exports = validateEndpoint;
