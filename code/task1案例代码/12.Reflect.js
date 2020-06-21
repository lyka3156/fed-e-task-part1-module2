// 12. Reflect 静态class
// 1) Reflect 成员方法就是 Proxy 处理对象的默认实现

const obj = { name: "zhangshan", age: 20 };
// 创建obj的代理对象
const proxyObj = new Proxy(obj, {
  // Reflect 成员方法就是 Proxy 处理对象的默认实现
  // 如果proxy里面没有定义get方法，内部默认就是通过Reflect实现的，如下所示
  get(target, property) {
    console.log("监听属性的逻辑");
    return Reflect.get(target, property);
  },
});
console.log(proxyObj.age);
// 监听属性的逻辑
// 20

// 2) 统一提供一套用于操作对象的 API
const obj1 = {
  name: "lisi",
  age: 20,
};

// 传统操作对象的方法
// console.log("name" in obj1); // true
// console.log(delete obj["age"]); // true
// console.log(Object.keys(obj)); // [ 'name' ]

// Reflect方式
console.log(Reflect.has(obj1, "name")); // true
console.log(Reflect.deleteProperty(obj1, "age")); // true
console.log(Reflect.ownKeys(obj1)); //  [ 'name' ]
