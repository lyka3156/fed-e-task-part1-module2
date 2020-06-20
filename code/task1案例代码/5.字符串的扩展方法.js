
// 5.字符串的扩展方法
// includes()    字符串是否包含这段字符
// startsWith()  字符串是否以这段字符开头
// endsWith()    字符串是否以这段字符结尾

const message = "Error: foo is not defined";

console.log(message.startsWith("Error"));   // true
console.log(message.endsWith("defined"));   // true
console.log(message.includes("foo"));   // true