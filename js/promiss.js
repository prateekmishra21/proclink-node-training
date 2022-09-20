const promissFunction = (resolve, reject) => {
  setTimeout(() => {
    resolve("Its Done..");
  }, 3000);
};
const promissObj = new Promise(promissFunction);
// promissObj.then((response) => {
//   console.log(response);
// });

// async and await
const getData = async () => {
  console.log("Inside get Data");
  var data = await promissObj;
  console.log("Await Data", data);
};

getData();
console.log("After Function..");
