var now = 1;
var intervelId = null;
const getTemp = () => {
  console.log("Time in second", now);
  now = now + 1;
  if (now === 11) {
    clearInterval(intervelId);
  }
};

setTimeout(() => {
  console.log("Its after 5000 ms.");
}, 5000);

intervelId = setInterval(getTemp, 1000);
