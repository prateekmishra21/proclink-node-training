const defaultoptions = {
  url: "http://localhost:4000/fileupload",
  startingByte: 0,
  fileId: "",
};

const fileUploadRequest = new WeakMap();

const uploadFileChunks = (file, options) => {
  var formData = new FormData();
  var req = new XMLHttpRequest();
  var chunk = file.slice(options.startingByte);

  formData.append("chunk", chunk, file.name);
  formData.append("fileId", options.fileId);
  req.open("POST", options.url, true);

  req.setRequestHeader(
    "content-range",
    `bytes=${defaultoptions.startingByte}-${
      defaultoptions.startingByte + chunk.size
    }-${file.size}`
  );

  req.setRequestHeader("x-file-id", options.fileId);

  req.upload.onprogress = (data) => {
    console.log(data.loaded, data.total);
    var per = Math.round((data.loaded * 100) / data.total);
    document.getElementById("progressbar").style.width = `${per}%`;
    document.getElementById("num_per").innerText = `${per} %`;
  };

  fileUploadRequest.get(file).request = req;
  req.send(formData);
};

const uploadFile = async (file) => {
  var requsetUrl = "http://localhost:4000/fileupload-request";
  var response = await fetch(requsetUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileName: file.name }),
  });
  response = await response.json();
  var options = { ...defaultoptions, fileId: response.fileId };
  fileUploadRequest.set(file, { request: null, options });
  uploadFileChunks(file, options);
};

document.getElementById("upload_id").addEventListener("click", () => {
  var imageInput = document.getElementById("file").files[0];
  uploadFile(imageInput);
});
