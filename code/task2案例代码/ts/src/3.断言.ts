export = {}; // 模块作用域，防止变量冲突

// 2 类型断言

let str: any = "hello word";

console.log(str.length);

console.log((str as string).length);
