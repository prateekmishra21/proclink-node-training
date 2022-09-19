const methodOne = (arg1, arg2) => {
  arg1("I am resolve data");
  arg2("Reject Data");
};

class Game {
  constructor(method) {
    this.resolveData = "";
    this.resolve = this.resolve.bind(this);
    this.then = this.then.bind(this);
    method(this.resolve, this.reject);
  }

  resolve(res) {
    this.resolveData = res;
  }
  reject(res) {}

  then(method) {
    method(this.resolveData);
  }
}

var obj = new Game(methodOne);
obj.then((res) => {
  console.log(res);
});
