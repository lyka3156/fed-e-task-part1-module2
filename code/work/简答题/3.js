// 三、结合 es6 新语法，用最简单的方式找出数组中的最小值。

var arr = [12, 34, 32, 89, 4];

var min1 = arr.reduce((pre, next) => Math.min(pre, next), arr[0]);
var min2 = Math.min(...arr);
console.log(min1, min2);

// 1.输出结果
// 4 4
