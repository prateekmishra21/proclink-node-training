const express = require("express");
const router = express.Router();

const {
  createNewTask,
  getAllTask,
  deleteOneTask,
  toggleTask,
} = require("./controllers");

router
  .route("/tasks")
  .get(getAllTask)
  .post(createNewTask)
  .delete(deleteOneTask)
  .put(toggleTask);

module.exports = router;
