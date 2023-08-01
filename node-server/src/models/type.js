const mongoose = require("mongoose");

// Define the schema for the model
const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  tags: {
    type: String,
  },
  // Add more fields as needed
});

// Create the Example model based on the schema
const Type = mongoose.model("Type", typeSchema);

module.exports = Type;
