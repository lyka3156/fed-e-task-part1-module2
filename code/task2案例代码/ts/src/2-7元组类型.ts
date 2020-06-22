export = {}; // 模块作用域，防止变量冲突

// 1.7 unknown 类型

let tupleType1: [string, boolean] = ["lisi", true];

// 1. 元组初始化的时候，如果出现类型不匹配的话就会报错
// let tupleType2: [string, boolean] = [true, "lisi"];

// 2. 元组初始化的时候，如果出现类型数量不匹配的话也会报错
// let tupleType2: [string, boolean] = ["lisi"];
