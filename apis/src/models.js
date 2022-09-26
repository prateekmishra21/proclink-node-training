const mongoose = require("mongoose");
const dbConnect = require("./utils/db");
const { ObjectId } = mongoose.Schema;

const useSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  password: String,
  email: String,
  uniqueId: String,
});

const todoSchema = mongoose.Schema({
  userId: { type: ObjectId, ref: "Users" },
  task: String,
  isCompleted: { type: Boolean, default: false },
});

const Users = dbConnect.model("Users", useSchema);
const Todos = dbConnect.model("Todos", todoSchema);

module.exports = { Users, Todos };
