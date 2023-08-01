const {
  fetchAllLabs,
  createLab,
  updateLab,
  deleteLab,
} = require("../repository/labRepository");

const fetchAllLabsService = async (req, res) => {
  try {
    return await fetchAllLabs(req, res);
  } catch (error) {}
};

const createLabService = async (req, res) => {
  try {
    return await createLab(req, res);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const updateLabService = async (req, res) => {
  try {
    return await updateLab(req, res);
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

const deleteLabService = async (req, res) => {
  try {
    return await deleteLab(req,res)
  } catch (error) {
    return error
  }
};

module.exports = {
  fetchAllLabsService,
  createLabService,
  updateLabService,
  deleteLabService,
};
