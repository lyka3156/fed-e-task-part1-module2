export = {}; // 模块作用域，防止变量冲突

// 4.2 可选参数及默认参数

// 可选参数
// 参数名前面带有?关键词，代表这个参数可传可不传
// 可选参数必须放在最后面
function createUserId1(name: string, id: number, age?: number): string {
  return name + id;
}

console.log(createUserId1("id", 1, 20));
console.log(createUserId1("id", 1));

// 默认参数
// 如果最后一个为使用了默认参数，相当于可选参数可传可不传
function createUserId2(name: string, id: number, age: number = 20): string {
  return name + id;
}
console.log(createUserId2("id", 1, 20));
console.log(createUserId2("id", 1));
