const Vendor = require("../models/vendor");

const createVendor = async (payload) => {
  try {
    const createdVendor = await Vendor.create(payload);
    return createdVendor;
  } catch (error) {
    return error;
  }
};
const updateVendor = async (payload) => {
  try {
    if (payload._id)
      return await Vendor.findByIdAndUpdate(payload._id, payload);
    return createVendor(payload);
  } catch (error) {
    return error;
  }
};
module.exports = { createVendor, updateVendor };
