const BusBoy = require("busboy");
const fs = require("fs");
const { promisify } = require("util");

const getFileDetails = promisify(fs.stat);

const randomString = () => {
  var data = "0123456789abcdefghijklmnopqrstuvwxyz";
  const randomNumGenerator = () => Math.floor(Math.random() * data.length);
  var arr = [];
  for (var i = 0; i < 16; i++) {
    arr.push(data[randomNumGenerator()]);
  }
  var uuid = arr.join("");
  return uuid;
};

const getFilePath = (fileName, fileId) => {
  return `./upload/${fileId}-${fileName}`;
};

const fileUploadRequest = (req, res) => {
  var fileName = req.body.fileName;
  if (fileName === null || fileName === undefined) {
    return res.json({ status: false, msg: "File Name Required.." });
  }

  var fileId = randomString();
  var fileName = getFilePath(fileName, fileId);

  fs.createWriteStream(fileName, { flags: "w" });
  res.json({ fileId: fileId, fileName: fileName });
};

const fileUpload = (req, res) => {
  const contentRange = req.headers["content-range"];
  const fileId = req.headers["x-file-id"];

  const match = contentRange.match(/bytes=(\d+)-(\d+)-(\d+)/);

  const rangeStart = Number(match[1]);
  const rangeEnd = Number(match[2]);
  const fileSize = Number(match[3]);

  if (rangeStart >= fileSize || rangeStart >= rangeEnd || rangeEnd > fileSize) {
    return res.json({ message: 'Invalid "Content-Range" provided' });
  }

  const busboy = BusBoy({ headers: req.headers });

  busboy.on("file", (_, file, fileName) => {
    const filePath = getFilePath(fileName.filename, fileId);

    getFileDetails(filePath).then((stats) => {
      if (stats.size !== rangeStart) {
        return res.status(400).json({ message: 'Bad "chunk" provided' });
      }

      file.pipe(fs.createWriteStream(filePath, { flags: "a" }));
    });
  });

  busboy.on("finish", () => {
    res.sendStatus(200);
  });

  req.pipe(busboy);
};

const fileUploadStatus = (req, res) => {
  var fileName = req.query.fileName;
  var fileId = req.query.fileId;

  if (fileId === undefined || fileName === undefined) {
    return res.json({ msg: "File Id and Name required" });
  }

  var fileName = getFilePath(fileName, fileId);
  getFileDetails(fileName).then((res) => {
    return res.json({ totalUploadedSize: res.size });
  });
};

module.exports = { fileUploadRequest, fileUpload, fileUploadStatus };
