const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "",
      version: "1.0.0",
      description: "",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Julian Rodriguez",
        url: "https://github.com/julandrod",
        email: "julian.andres.rodriguez@gmail.com",
      },
    },
    servers: [
      {
        url: "",
      },
    ],
    securityDefinitions: {
      Bearer: {
        type: "apiKey",
        name: "Authorization",
        in: "header",
      },
    },
    security: [
      {
        Bearer: [],
      },
    ],
  },
  apis: ["./src/routes/docs.yaml"],
};

module.exports = options;
