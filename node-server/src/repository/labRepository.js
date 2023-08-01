const Lab = require("../models/lab");
const Vendor = require("../models/vendor");
const Variant = require("../models/variant");
const Type = require("../models/type");

const { startSession, Types } = require("mongoose");
const { updateVendor } = require("./vendorRepo");
const { updateVariant } = require("./variantRepository");
const { updateType } = require("./typeRepo");

const fetchAllLabs = async (req, res) => {
  try {
    const labs = await Lab.find()
      .populate("vendor")
      .populate("type")
      .populate("variant");
    // .populate("options");
    return labs;
  } catch (error) {
    return res.json(error.message);
  }
};

const createLab = async (req, res) => {
  const session = await startSession();
  try {
    session.startTransaction();
    const { vendor, variant, type } = req.body;
    var savedVendor, savedVariant, savedType;
    // Save the child objects (Vendor, Type, Option, Variant) to the database
    if (vendor) savedVendor = await Vendor.create(vendor);
    if (variant) savedVariant = await Variant.create(variant);
    if (type) savedType = await Type.create(type);

    // Create a new Lab object with references to the child objects
    const newLab = new Lab({
      ...req.body,
    });
    if (savedVendor) {
      newLab.vendor = savedVendor._id;
    }
    if (savedVariant) {
      newLab.variant = savedVariant._id;
    }
    if (savedType) {
      newLab.type = savedType._id;
    }
    // Save the Lab object to the database
    await Lab.create(newLab);
    await session.commitTransaction();
    return fetchAllLabs(req, res);
  } catch (error) {
    await session.abortTransaction();
    return res.json(error.message);
  }
};

const updateLab = async (req, res) => {
  try {
    const { vendor, variant, type, ...lab } = req.body;
    const newLab = new Lab({ ...lab });
    if (vendor) {
      newLab.vendor = await updateVendor(vendor);
    }
    if (variant) {
      newLab.variant = await updateVariant(variant);
    }
    if (type) {
      newLab.type = await updateType(type);
    }
    await Lab.findByIdAndUpdate(lab._id, newLab);
    return fetchAllLabs(req, res);
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
};

const deleteLab = async (req, res) => {
  try {
    await Lab.findByIdAndRemove(req);
    return fetchAllLabs(req, res);
  } catch (error) {
    return res.json(error.message);
  }
};

module.exports = { fetchAllLabs, createLab, updateLab, deleteLab };
