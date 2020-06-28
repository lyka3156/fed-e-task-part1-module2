// 二: 请说出下列最终的执行结果，并解释为什么。

var tmp = 123;

if (true) {
  console.log(tmp);
  let tmp;
}

// 1. 执行结果
// 报错: Cannot access 'tmp' before initialization

// 2. 原因
// let的特性暂存死区
// 在当前块级作用域中存在tmp使用let/const声明的情况下，访问tmp，只会在当前作用域找变量tmp，而这时，还未到声明时候，所以控制台Error: Cannot access 'tmp' before initialization
