const { Users, Todos } = require("../models");

const createNewTask = async (req, res) => {
  const data = req.body;
  var newTask = Todos(data);
  newTask = await newTask.save();

  return res.json({ status: "OK", data: newTask });
};

const getAllTask = async (req, res) => {
  var _id = req.query.userId;
  var allTasks = await Todos.find({ userId: _id });

  return res.json({ status: "OK", data: allTasks });
};

const deleteOneTask = async (req, res) => {
  var _id = req.query._id;
  var isDeleted = await Todos.findByIdAndDelete(_id);

  return res.json({ status: "OK", data: isDeleted });
};

const toggleTask = async (req, res) => {
  var _id = req.query._id;
  var data = req.body;
  var task = await Todos.findByIdAndUpdate(_id, data);
  task = await Todos.findById(_id);
  return res.json({ status: "OK", data: task });
};

module.exports = { createNewTask, getAllTask, deleteOneTask, toggleTask };
