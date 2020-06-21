// 14. set 数据结构
// set 数据结构是不允许重复的

const set1 = new Set();
set1.add(11).add(12).add(13).add(11);
console.log(set1); // Set { 11, 12, 13 }

// set1.forEach((i) => console.log(i));

// es6之后的方法
for (let value of set1) {
  console.log(value);
}
// 11
// 12
// 13
console.log(set1.size); // 3    长度
console.log(set1.has(13)); // true  是否存在莫一项
console.log(set1.delete(12)); // true   删除莫一项
set1.clear(); // 清空set集合所有的值

// 常见使用场景 对数组去重
let array = [1, 2, 3, 4, 5, 5, 4, 3];
console.log(Array.from(new Set(array))); // [1, 2, 3, 4, 5];
console.log([...new Set(array)]); // [1, 2, 3, 4, 5];
