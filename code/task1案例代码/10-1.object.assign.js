
// 10. Object.assign

const source1 = {
    a: 1,
    b: 1,
    c: 1
}
const source2 = {
    b: 2
}
const target = {
    c: 3,
    d: 3
}
// 第一个参数就是目标对象，其他参数都是源对象
// 总结: 让后面对象的属性去覆盖第一个对象
const result = Object.assign(target, source1, source2);
console.log(result === target);
console.log(result);    // { c: 1, d: 3, a: 1, b: 2 }


// 使用例子
let obj = { name: "张山", age: 20 };
function func(obj) {
    let newObj = Object.assign({}, obj);
    newObj.name = "newName";    // { name: 'newName', age: 20 }
    console.log(newObj);
}
func(obj);
console.log(obj);   // { name: '张山', age: 20 }