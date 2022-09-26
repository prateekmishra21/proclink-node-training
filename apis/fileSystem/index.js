const fs = require("fs");

// fs.writeFileSync("file.txt", "I love React JS");
// fs.appendFileSync("file.txt", "I love React JS, I am planning to learn it.");

// var buf_data = fs.readFileSync("file.txt");
// var real_data = buf_data.toString();
// console.log(real_data);

// fs.renameSync("file.txt", "data.txt");
fs.unlinkSync("data.txt");
