// Date Class
var date = new Date();
// console.log(date.toDateString());
// console.log(date.toLocaleString());

date = "12-11-1994";
var newDate = new Date(date);

newDate = newDate.toLocaleDateString("en-IN", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

newDate = newDate.replace(/ /g, "-");

// console.log(newDate);

var num = "45.32asd43";
// console.log(parseFloat(num));
