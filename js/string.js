var thought = "I am learning react.";

if (thought.indexOf("react") !== -1) {
  console.log("React Exist..");
} else {
  console.log("Not Exist..");
}

var url = "http://www.proclink.com";
if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) {
  console.log("This is URL");
}

var date = "29-11-1994";

var data = "345fedfd4343";
data = data.split("");

num = "";
data.map((char) => {
  if (isNaN(parseInt(char)) === false) {
    num = num + char;
  }
});

console.log(num);
