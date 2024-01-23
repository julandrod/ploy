const { tryCatchWrapper, endpointResponse } = require("../helpers");
const endpointServices = require("../services/endpoints.services");

const postInfo = tryCatchWrapper(async (req, res, next) => {
  const { endpoint: modelName, userId } = req.params;

  const newInfo = await endpointServices.createInfo({
    modelName,
    reqUser: req.user,
    userId,
    info: req.body,
  });

  endpointResponse({
    res,
    code: 201,
    message: `${modelName} agregado de manera exitosa`,
    body: { [modelName]: newInfo },
  });
});

const getAllInfo = tryCatchWrapper(async (req, res, next) => {
  const { endpoint: modelName, userId } = req.params;
  const allInfo = await endpointServices.findAllInfo({
    modelName,
    reqUser: req.user,
    userId,
  });

  endpointResponse({
    res,
    message: `${modelName} listados de manera exitosa`,
    body: { [modelName]: allInfo },
  });
});

const getInfoById = tryCatchWrapper(async (req, res, next) => {
  const { endpoint: modelName, userId, infoId } = req.params;
  const singleInfo = await endpointServices.findSingleInfo({
    modelName,
    infoId,
    reqUser: req.user,
    userId,
  });

  endpointResponse({
    res,
    message: `${modelName} listado de manera exitosa`,
    body: { [modelName]: singleInfo },
  });
});

const putInfo = tryCatchWrapper(async (req, res, next) => {
  const { endpoint: modelName, userId, infoId } = req.params;
  const updatedInfo = await endpointServices.findAndUpdateInfo({
    modelName,
    infoId,
    reqUser: req.user,
    userId,
    info: req.body,
  });

  endpointResponse({
    res,
    message: `${modelName} actualizado de manera exitosa`,
    body: { [modelName]: updatedInfo },
  });
});

const deleteInfo = tryCatchWrapper(async (req, res, next) => {
  const { endpoint: modelName, userId, infoId } = req.params;
  const deletedInfo = await endpointServices.findAndDeleteInfo({
    modelName,
    infoId,
    reqUser: req.user,
    userId,
  });

  endpointResponse({
    res,
    message: `${modelName} eliminado de manera exitosa`,
    body: { [modelName]: deletedInfo },
  });
});

module.exports = { postInfo, getAllInfo, getInfoById, putInfo, deleteInfo };
