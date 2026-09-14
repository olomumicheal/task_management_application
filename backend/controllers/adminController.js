const User = require("../models/User");
const Task = require("../models/Task");

const getStats = async (req, res) => {
  try {
    const users = await User.countDocuments();
    const tasks = await Task.countDocuments();

    res.json({
      totalUsers: users,
      totalTasks: tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("user", "name email")
      .sort({
        createdAt: -1,
      });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStats,
  getAllTasks,
};