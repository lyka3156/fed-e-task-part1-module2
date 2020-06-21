// Map 数据结构

// object 数据结构存值
const obj = {};
obj[true] = 1;
obj[123] = 2;
obj[{ a: 1 }] = 3;
// obj的key不管设置什么类型的值内部都会转成字符串
console.log(obj); // { '123': 2, true: 1, '[object Object]': 3 }
console.log(Reflect.ownKeys(obj)); // [ '123', 'true', '[object Object]' ]
console.log(obj["[object Object]"]); //    3  有问题

// Map 数据结构存值
const map = new Map();
map.set(true, 1);
const tom = { a: 3 };
map.set(tom, 2);

console.log(map); // Map { true => 1, { a: 3 } => 2 }

console.log(map.has(tom)); // true 是否存在
console.log(map.delete(true)); // true 删除莫一项
console.log(map); // Map { { a: 3 } => 2 }
// map.clear(); // 清空所有的值
console.log(map); // Map {}

// map.forEach(value, (key) => {
//   console.log(value, key);
// });
