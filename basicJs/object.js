var obj = {
  name: "React",
  details: { pin: 434 },
  name: "JAVA",
};

console.log(obj);

obj.language = "JAVA";

obj.programming = 34;
obj.programming.code = "yes";
obj["programming"].data = "No";

console.log(obj.programming);

let keys = Object.values(obj);
console.log(keys);

var data = Object.keys(obj);
console.log("Data", data);

var arrr = [54545, 454, 5454, 4, 545, 56565, 656];
console.log(arrr.indexOf(54545));
