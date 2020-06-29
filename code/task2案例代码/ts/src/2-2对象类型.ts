export = {}; // 模块作用域，防止变量冲突

// 1.2 对象类型

// object 类型是指除了原始类型以外的其它类型
const foo: object = function () {}; // [] // {}

// 如果需要明确限制对象类型，则应该使用这种类型对象字面量的语法，或者是「接口」

const obj: { foo: number; bar: string } = { foo: 123, bar: "string" };
