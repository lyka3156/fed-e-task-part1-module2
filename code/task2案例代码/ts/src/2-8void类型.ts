export = {}; // 模块作用域，防止变量冲突

// 1.8 void 类型

function fn(): void {
  console.log("void 类型的函数没有返回值");
}

// 需要注意的是，声明一个 void 类型的变量没有什么作用，因为它的值只能为 undefined 或 null：
let unusable1: void = undefined;
// let unusable2: void = null; // 需要在 tsconfig.json 中 配置"strictNullChecks": false 才能赋值 null
