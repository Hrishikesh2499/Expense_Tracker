const express = require("express");
const router = express.Router();
// Import route files
const labRoutes = require("./labRoute");

// Add more route imports as needed

router.use("/lab", labRoutes);
// Register additional route files using similar syntax

module.exports = router;
