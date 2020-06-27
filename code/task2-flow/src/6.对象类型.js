// @flow


// 6. 对象类型

// 1. 声明对象的属性是什么类型的
const obj1: {
    name: string,
    age: number
} = { name: "lisi", age: 20 };

// 2. 声明对象的属性可选
const obj2: {
    name: string,
    age?: number    // 可选的变量
} = { name: "lisi" };

// 3. 声明对象的属性和值是指定类型
const obj3: { [string]: string } = {};
obj3.name = "zhangshan";
// obj3.age = 20;  // 编译报错
