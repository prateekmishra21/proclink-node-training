const { usersData, friendsData, collegesData } = require("./src/controllers");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const router = require("./src/router");
const dbConnect = require("./src/utils/db");

server.use(cors());
server.use(bodyParser.json());

server.use("/api", router);

server.listen(4000, () => {
  console.log("Server Started..");
});
