// 3. 对象的解构

const obj = { name: "zhangshan", age: 20 };
var name = "123";
const { name: objName, age, sex = "男" } = obj;
console.log(name, objName, age, sex);   // 123,zhanghsan,20,男



const { log } = console;

log(1); // 1