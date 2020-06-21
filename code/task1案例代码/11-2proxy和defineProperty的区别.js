// 11.2 proxy vs defineProperty 对象

// const person = {
//   name: "abc",
//   age: 20,
// };

// 1) Proxy能监视除了get,set还有其他方法
// 例如： deleteProperty,has....
// const personProxy = new Proxy(person, {
//   deleteProperty(target, property) {
//     console.log("delete", property);
//     delete target[property];
//   },
// });
// delete personProxy.age;
// console.log(personProxy); // { name: 'abc' }

// 2) Proxy能监视数组，defineProperty不能监视数组

const list = [];
const listProxy = new Proxy(list, {
  set(target, property, value) {
    console.log("set", property, value);
    target[property] = value;
    return true; // 表示设置成功
  },
});

listProxy.push(1);
listProxy.push(10);
console.log(listProxy); // [ 1, 10 ]
