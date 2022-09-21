const Users = require("./models");

const usersData = (req, res) => {
  Users.find().then((response) => {
    return res.json(response);
  });
};

const createUser = (req, res) => {
  var newUser = Users({
    name: "Data - 2",
    username: "data - 2",
    password: "1234",
    email: " p@g.com",
    address: "bhopal",
  });

  newUser.save().then((response) => {
    return res.send("User Created....");
  });
};

const friendsData = (req, res) => {
  return res.json([{ name: "React" }]);
};

const collegesData = (req, res) => {
  return res.json([{ name: "BIST" }]);
};

module.exports = { usersData, createUser, friendsData, collegesData };
