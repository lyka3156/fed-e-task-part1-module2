// 1. 在构造函数的实例上添加方法
var Fn1 = function () {
  this.foo = function () {
    console.log(11111);
  };
};
let f1 = new Fn1();

// 2. 在构造函数的原型上添加方法
var Fn2 = function () {};
Fn2.prototype.foo = function () {
  console.log(11111);
};
let f2 = new Fn2();
