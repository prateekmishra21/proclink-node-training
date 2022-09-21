const express = require("express");
const router = express.Router();
const {
  usersData,
  createUser,
  collegesData,
  friendsData,
} = require("./controllers");

router.get("/users", usersData);
router.get("/users-create", createUser);
router.get("/colleges", collegesData);
router.get("/friends", friendsData);

module.exports = router;
