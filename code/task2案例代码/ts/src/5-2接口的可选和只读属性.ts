export = {}; // 模块作用域，防止变量冲突

// 1. 只读属性限制属性不能编译  (readonly)
// 定义了一个Person接口，并且有个只读的name属性和一个可选的age属性
interface Person {
  readonly name: string;
  age?: number;
}

// stu对象实现了Person接口，并且实现了name只读属性，age属性可选
let stu: Person = {
  name: "1234",
};

// stu.name = 123;          // 只读属性name不能修改否则会编译报错
console.log(stu);

// 2. 只读属性限制数组不能编辑      (ReadonlyArray)
let arr: number[] = [1, 2, 3, 4];
let readonlyArr: ReadonlyArray<number> = arr;
// readonlyArr[0] = 12; // error!
// readonlyArr.push(5); // error!
// readonlyArr.length = 100; // error!
// arr = readonlyArr; // error!
