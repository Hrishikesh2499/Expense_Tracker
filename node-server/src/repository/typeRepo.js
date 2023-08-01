const Type = require("../models/type");

const createType = async (payload) => {
  try {
    const createdType = await Type.create(payload);
    return createdType;
  } catch (error) {
    return error;
  }
};

const updateType = async (payload) => {
  try {
    if (payload._id) return await Type.findByIdAndUpdate(payload._id, payload);
    return createType(payload);
  } catch (error) {
    return error;
  }
};

module.exports = { createType, updateType };
