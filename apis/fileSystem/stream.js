const fs = require("fs");

const getFileData = (req, res) => {
  var rstream = fs.createReadStream(
    "/Users/prateekmishra/Desktop/Node training/apis/fileSystem/movie.mkv"
  );

  rstream.pipe(res);
};

module.exports = getFileData;
