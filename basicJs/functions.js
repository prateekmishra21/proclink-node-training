function div(arg1, arg2, arg3) {
  return arg1 / arg2 / arg3;
}

function multi(arg1, arg2, arg3) {
  var multi = arg1 * arg2 * arg3;
  return div(arg1, arg2, multi);
}

function addition(arg1, arg2, arg3) {
  var add = arg1 + arg2 + arg3;
  return multi(arg1, arg2, add);
}

function subtraction(arg1, arg2) {
  var sub = arg1 - arg2;
  return addition(arg1, arg2, sub);
}

function restult(arg) {
  var res = arg(25, 5);
  console.log(res);
}

restult(subtraction);
