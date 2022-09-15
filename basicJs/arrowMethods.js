var add = (arg1, arg2) => {
  console.log(arg1 + arg2);
};

var sub = (arg1, arg2) => {
  return add(arg1, arg2);
};

var res = sub(3, 4);
console.log(res);
