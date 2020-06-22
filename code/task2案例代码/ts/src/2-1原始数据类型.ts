export = {}; // 模块作用域，防止变量冲突

// 1.1 原始数据类型

// Stirng类型
let name: string = "bc";

// Number类型
let age: number = 20;

// Boolean类型
let sex1: boolean = true;
let sex2: boolean = !!1;

// null类型
let n: null = null;

// undefined类型
let u: undefined = undefined;

// symbol类型
let s: symbol = Symbol.for("abc");

console.log(s); // Symbol(abc)
