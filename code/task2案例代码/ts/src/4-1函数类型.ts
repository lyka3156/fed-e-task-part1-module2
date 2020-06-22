export = {}; // 模块作用域，防止变量冲突

// 4.1 函数类型

// 创建一个接受string类型和number类型的参数，并且返回一个字符串类型的函数
function createUserId(name: string, id: number): string {
  return name + id;
}

// 创建一个变量接受一个带有string类型和number类型的参数，并且返回一个string类型的函数
let getUserId: (str: string, id: number) => string;
// getUserId = 3;   编译报错
getUserId = createUserId;
