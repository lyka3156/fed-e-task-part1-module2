export = {}; // 模块作用域，防止变量冲突

// 1.6 unknown 类型

// 1. 任何类型都可以赋值给unknown类型
let a: unknown = 1;
a = "123";
a = true;
a = null;
a = undefined;
a = [];

// 2. unknown 类型不可以赋值给任何类型(编译时就会报错)
// let b: string = a; // 会报错
// 3.  unknown 类型不可以使用任何类型的方法(编译时就会报错)
// new a(); // 会报错
