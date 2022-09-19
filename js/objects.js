var details = { milk: "React", coffe: 17, price: { main: 100, gst: 18 } };

details.version = 23;
var version = "version";
details[version] = 23;

// sprad operator (...) is for objects and array both.

var newObj = { ...details, coffe: 20 };
// console.log(details, newObj);

newObj = { ...details, price: { total: 118, ...details.price } }; //10 sec.
console.log(newObj);
