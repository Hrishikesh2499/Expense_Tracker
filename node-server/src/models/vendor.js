const mongoose = require("mongoose");

// Define the schema for the model
const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    unique : true
  },
  // Add more fields as needed
});

// Create the Example model based on the schema
const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
