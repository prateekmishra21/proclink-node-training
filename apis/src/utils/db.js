const mongoose = require("mongoose");

const dbConnect = mongoose.createConnection(
  "mongodb+srv://prateek:asdqwe123@cluster0.aymw0vw.mongodb.net/blog?retryWrites=true&w=majority"
);

dbConnect.on("connected", () => {
  console.log("DB CONNECTED");
});

dbConnect.on("error", () => {
  console.log("Error");
});

module.exports = dbConnect;
