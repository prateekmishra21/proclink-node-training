const { usersData, friendsData, collegesData } = require("./src/controllers");
const express = require("express");
const server = express();
const cors = require("cors");
const router = require("./src/router");
const dbConnect = require("./src/utils/db");

server.use(cors());

server.use("/api", router);

server.listen(4000, () => {
  console.log("Server Started..");
});
