const mongoose = require("mongoose");
const dbConnect = require("./utils/db");

const useSchema = mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  address: String,
});

const Users = dbConnect.model("Users", useSchema);
module.exports = Users;
