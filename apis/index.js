const { usersData, friendsData, collegesData } = require("./src/controllers");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const authRouter = require("./src/router");
const taskRouter = require("./src/todo/router");
const dbConnect = require("./src/utils/db");
const getFileData = require("./fileSystem/stream");
const { fileUploadRequest, fileUpload, fileUploadStatus } = require("./stream");

server.use(cors());
server.use(bodyParser.json());

server.use("/api", authRouter);
server.use("/api", taskRouter);
// server.get("/", getFileData);

server.post("/fileupload-request", fileUploadRequest);
server.post("/fileupload", fileUpload);
server.get("/fileupload-status", fileUploadStatus);

server.listen(4000, () => {
  console.log("Server Started..");
});
