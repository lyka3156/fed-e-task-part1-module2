
// 10-2 Object.is 方法

// 传统写法的问题
console.log(+0 === -0); // true
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false


// es6的Object.is方法       新的比较方法
// 能区分+0和-0
// NaN能全等于NaN
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN));   // true
