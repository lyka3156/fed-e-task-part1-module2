// 七、说说什么是浅拷贝，什么是深拷贝？

// 1. 浅拷贝是两个变量指向的对象地址是一样的，只要有一个变量改变了，另外一个变量的值也会改变
var obj1 = { name: "zhangshan", age: 20 };
var obj2 = obj1;
obj2.name = "lisi";
console.log("obj1", obj1);
// 输出结果: obj1 { name: 'lisi', age: 20 }

// 2. 深拷贝是两个变量指向的对象地址是完全独立的，互不影响。不会因为这个变量改变而影响另外一个变量中的值
var obj1 = { name: "zhangshan", age: 20 };
var obj2 = JSON.parse(JSON.stringify(obj1));
obj2.name = "lisi";
console.log("obj1", obj1);
// 输出结果: obj1 { name: 'zhangshan', age: 20 }
