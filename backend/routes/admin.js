const express = require("express");
const protect = require("../middleware/auth");

const {
  getStats,
  getAllTasks,
} = require("../controllers/adminController");

const router = express.Router();

router.get("/stats", protect, getStats);

router.get("/tasks", protect, getAllTasks);

module.exports = router;