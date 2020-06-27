
// JavaScript 弱类型产生的问题

const obj = {};


// 1. 这样一个隐患就会留在我们代码中
// obj.foo();  // 编译不会报错，运行的时候会报错
// setTimeout(() => {
//     obj.foo();
// }, 100000);


// 2. 问题2
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));     // 2
console.log(sum(1, "1"));   // "11"


// 3. 问题3
const obj1 = {};
obj1[true] = 100;
console.log(obj1["true"]);  // 100
