const {
  fetchAllLabsService,
  createLabService,
  updateLabService,
  deleteLabService,
} = require("../services/labService");
const { generateResponse, generateErrorResponse } = require("../utils");

const fetchAllLabsController = async (req, res) => {
  try {
    const labs = await fetchAllLabsService(req, res);
    return res.json(generateResponse("Data Retrieved Successfully", labs, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

const createLabController = async (req, res) => {
  try {
    const labs = await createLabService(req, res);
    return res.json(generateResponse("Data Created Successfully", labs, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

const updateLabController = async (req, res) => {
  try {
    const labs = await updateLabService(req, res);
    return res.json(generateResponse("Data Updated Successfully", labs, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

const deleteLabController = async (req, res) => {
  try {
    const labs = await deleteLabService(req, res);
    return res.json(generateResponse("Data Deleted Successfully", labs, 200));
  } catch (error) {
    return res.json(generateErrorResponse(error, null, 500));
  }
};

module.exports = {
  fetchAllLabsController,
  createLabController,
  updateLabController,
  deleteLabController,
};
