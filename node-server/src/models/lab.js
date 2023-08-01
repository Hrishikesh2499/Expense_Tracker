const { Schema, model } = require("mongoose");

// Define the schema for the model
const labSchema = new Schema({
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  title: String,
  body: String,
  vendor: {
    type: Schema.Types.ObjectId,
    ref: "Vendor",
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "Type",
  },
  options: [{ type: Schema.Types.ObjectId, ref: "Option" }],
  variant: {
    type: Schema.Types.ObjectId,
    ref: "Variant",
  },
  imgSrc: String,
  // Add more fields as needed
});

// Create the Example model based on the schema
const Lab = model("Lab", labSchema);

module.exports = Lab;
