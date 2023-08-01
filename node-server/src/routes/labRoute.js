const express = require("express");
const {
  fetchAllLabsController,
  createLabController,
  updateLabController,
  deleteLabController,
} = require("../controllers/labController");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    return await fetchAllLabsController(req, res);
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    return await createLabController(req, res);
  } catch (error) {
    return res.json(error.message);
  }
});

router.put("/", async (req, res) => {
  try {
    return await updateLabController(req, res);
  } catch (error) {
    return res.json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    return await deleteLabController(req.params.id, res);
  } catch (error) {
    return res.json(error.message);
  }
});
module.exports = router;
