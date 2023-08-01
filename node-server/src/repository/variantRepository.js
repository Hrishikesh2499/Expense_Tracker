const Variant = require("../models/variant");

const createVariant = async (payload) => {
  try {
    const createdVariant = await Variant.create(payload);
    return createdVariant;
  } catch (error) {
    return error;
  }
};

const updateVariant = async (payload) => {
  try {
    if (payload._id)
      return await Variant.findByIdAndUpdate(payload._id, payload);
    return createVariant(payload);
  } catch (error) {
    return error;
  }
};

module.exports = { createVariant, updateVariant };
