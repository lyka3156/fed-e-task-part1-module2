// 16. Symbol 原始数据类型

// a.js
const cache = {};

// b.js
// cache["foo"] = 1;
cache["a_foo"] = 1;

// c.js
// cache["foo"] = 2;
cache["b_foo"] = 2;

// 现如今我们大量使用第三方模块，对会去扩展第三方模块提供的一些对象，那此时你是不知道这个对象中是否存在莫一个指定的健，你如果直接去扩展就有可能会产生冲突的问题
// 以前解决的方式就是约定，例如变量名改为 = 模块_变量名
console.log(cache); // { a_foo: 1, b_foo: 2 }

const s1 = Symbol();
console.log(s1); // Symbol()
console.log(typeof s1); // symbol
console.log(s1 === s1); // true

// console.log(Symbol("foo"));
// console.log(Symbol("bar"));

// const obj = {
//   [Symbol("foo")]: 1,
//   [Symbol("bar")]: 2,
// };
// console.log(obj);

// 使用 Symbol 来实现对象的私有成员
// a.js   ==========
const name = Symbol();
const person = {
  [name]: "abc", // 私有成员
  say() {
    // 普通成员
    console.log(this[name]);
  },
};

// b.js ====== 无法创建相同的 Symbol 所以无法访问a.js 的成员
// 只能调用普通的成员
person.say(); // abc
