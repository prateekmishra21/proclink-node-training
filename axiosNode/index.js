const axios = require("axios").default;
var url = "https://jsonplaceholder.typicode.com/users";
axios.get(url).then((res) => {
  console.log(res.data);
});

// HTTP Methods: GET, POST, PUT, DELETE
