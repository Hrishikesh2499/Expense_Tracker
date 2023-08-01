const mongoose = require("mongoose");

// Define the schema for the model
const optionSchema = new mongoose.Schema({
  name: String,
  value: String
});

// Create the Example model based on the schema
const Option = mongoose.model("Option", optionSchema);

module.exports = Option;
