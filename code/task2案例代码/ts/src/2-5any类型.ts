export = {}; // 模块作用域，防止变量冲突

// 1.5 any 类型

// 1. 任何类型都可以赋值给any类型
let a: any = 1;
a = "123";
a = true;
a = null;
a = undefined;
a = [];

// 2. any类型可以赋值给任何类型
let b: string = a;
// 3. any类型可以使用类型的方法编译都不会报错
new a();
