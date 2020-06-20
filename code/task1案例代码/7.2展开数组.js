
// 7.2 展开数组

const arr = [1, 2, 3];

// 1. 展开数组
// apply原始写法
console.log.apply(console, arr);    // 1 2 3
// 展开运算符写法
console.log(...arr);                // 1 2 3