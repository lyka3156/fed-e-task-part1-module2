// 1. let 与 快级作用域
// 1.1 在块级作用域外面是无法访问块级作用域的
// 1.2 for循环中解决全局作用域带来的影响  (其实块级作用域内部也使用了闭包)
// 1.3 for循环内部其实有两层嵌套的作用域
// 1.4 let 不会变量提升

// 1.1 在块级作用域外面是无法访问块级作用域的
// 一般在嵌套循环中不推荐重命的命名
// for (let i = 0; i < 3; i++) {
//     for (let i = 0; i < 3; i++) {
//         console.log(i);
//     }
//     console.log("内层循环结束i=", i);
// }
// 输出3个0,1,2

// 1.2 for循环中解决全局作用域带来的影响
// let elements = [{}, {}, {}];
// for (let i = 0; i < elements.length; i++) {
//     // 通过闭包使用函数作用域摆脱全局作用域带来的影响
//     elements[i].onclick = (function () {
//         return function () {
//             console.log(i);
//         }
//     }(i))
// }
// let elements = [{}, {}, {}];
// for (let i = 0; i < elements.length; i++) {
//     // 通过闭包使用函数作用域摆脱全局作用域带来的影响
//     elements[i].onclick = function () {
//         console.log(i);
//     }

// }
// elements[0].onclick();   // 输出0

// 1.3 for循环内部其实有两层嵌套的作用域
// for (let i = 0; i < 2; i++) {
//     let i = "foo";
//     console.log(i);
// }
// 拆解for的执行
// let i = 0;
// if (i < 2) {
//     let i = "foo";
//     console.log(i);
// }
// i++;
// if (i < 2) {
//     let i = "foo";
//     console.log(i);
// }
// 输出2个 foo

// 1.4 let不会变量提升
console.log(foo);
let foo = "ze";