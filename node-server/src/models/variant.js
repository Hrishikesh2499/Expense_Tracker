const mongoose = require("mongoose");

// Define the schema for the model
const variantSchema = new mongoose.Schema({
  sku: {
    type: String,
    unique: true,
  },
  grams: {
    type: Number,
  },
  inventoryTracker: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  policy: {
    type: String,
  },
  ffmService: {
    type: String,
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
  },
  compareAtPrice: {
    type: String,
  },
  // Add more fields as needed
});

// Create the Example model based on the schema
const Variant = mongoose.model("Variant", variantSchema);

module.exports = Variant;
