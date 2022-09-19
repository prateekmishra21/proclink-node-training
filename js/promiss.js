// define promiss...
const promissMethod = (resolve, reject) => {
  resolve("hi I am resolve");
};

var promissObj = new Promise(promissMethod);
promissObj.then((res) => {
  console.log(res);
});
