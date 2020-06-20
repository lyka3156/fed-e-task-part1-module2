
// 9. 对象字面量增强

const foo = "123";

// 传统形式
// const obj = {
//     foo: 123
// };

// es6简写属性的方式
// 1. 变量名与我们要添加到对象的属性名一致的话，可以直接写个属性名就行了
const obj = {
    foo,
    // 2. 对象里面的函数简写方式： 可以省略 :function
    method() {
        console.log(this);  // { foo: '123', method: [Function: method], '0.5249172786043972': 123 }
    },
    // method: function() {
    //     console.log(this);
    // }
    // 3. 对象字面量的变量名可以使用动态值了 （计算属性名）
    [Math.random()]: 123
};
console.log(obj);   // { foo: '123', method: [Function: method], '0.5249172786043972': 123 }
obj.method();


