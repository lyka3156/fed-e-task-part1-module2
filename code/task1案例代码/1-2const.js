//  1.2 const
// 在 let 上加了只读的特性  (变量一经声明不允许再被修改)


// 报错
// const name = "abc";
// name = "123";
// 报错
// const name;
// name = "123";

// 不能重新去指向新的内存地址
const obj = {};
obj.name = "123";   // 不报错
console.log(obj);      // { name: '123' }
obj = {};       // 报错