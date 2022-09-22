const express = require("express");
const router = express.Router();
const {
  registerNewUser,
  getAllUsers,
  getOneUser,
  deleteOneUser,
  updateOneUser,
  loginUser,
  isAuthenticated,
} = require("./controllers");

router.get("/get-users", getAllUsers);
router.get("/get-one-users", getOneUser);
router.post("/update-one-users", updateOneUser);
router.get("/delete-one-users", deleteOneUser);
router.post("/register", registerNewUser);
router.post("/login", loginUser);
router.get("/is-auth", isAuthenticated);

module.exports = router;
