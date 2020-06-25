export = {}; // 模块作用域，防止变量冲突

// 5.1 对象的形状

// 定义Person接口，接口里面有name和age属性
interface Person {
  name: string;
  age: 20;
}

// 实现了 Person接口，就必须实现它内部的成员(name和age)，不然会编译不通过
let stu: Person = {
  name: "lisi",
  age: 20,
};

console.log(stu);
