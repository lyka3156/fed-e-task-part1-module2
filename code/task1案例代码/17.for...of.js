// 17. for...of 循环

const arr = [1, 2, 3];

// 1. for...of循环遍历数组拿到的是每一项的值，传统的for循环拿到的是下标
for (const item of arr) {
  console.log(item);
}
// 1
// 2
// 3
// arr.forEach((item) => {
//   console.log(item);
// });
for (const item of arr) {
  console.log(item);
  if (item >= 2) {
    break;
  }
}
// 1
// 2

// arr.forEach()   // 不能跳出循环
// arr.some()       // 循环中返回true会跳出循环
// arr.every()      // 循环中返回false会跳出循环
// for...of()      // 循环中可以使用break跳出循环

// 2. 除了数组能通过for...of遍历，还有一些arguments,dom的一些伪数组也能遍历,已经Set,Map都能遍历
const s = new Set(["foo", "bar"]);
for (const key of s) {
  console.log(key);
}
// foo
// bar
const m = new Map();
m.set("foo", 123);
m.set("bar", 234);
for (const [key, value] of m) {
  console.log(key, value);
}
// foo 123
// bar 234

// 3. for...of 遍历普通对象
// 对象需要一个可迭代的接口才能使用for...of循环遍历对象
const obj = { foo: 123, bar: 456 };
for (const item of obj) {
  console.log(item);
}
//  TypeError: obj is not iterable
