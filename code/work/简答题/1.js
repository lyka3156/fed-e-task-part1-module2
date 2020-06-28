// 一、请说出下列最终的执行结果，并解释为什么。

var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6]();

// 1. 执行结果
// 输出10

// 2. 原因：
// es2015之前的作用域只有全局作用域和函数作用域，而这里var声明的变量i就是全局作用域，所以最后数组中每项的i输出的都是全局变量i的值(10)
