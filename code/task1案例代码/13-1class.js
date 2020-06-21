// 13. class 关键词 定义类型

// 传统方式： 通过函数和函数的原型来实现类型的定义
// function Person(name) {
//   this.name = name;
// }
// // 实例之间共享一些成员 （使用原型）
// Person.prototype.say = function () {
//   console.log(`hi ${this.name}`);
// };

// es6 的 关键词 class 方式
class Person {
  // 构造函数
  constructor(name) {
    // 访问实例成员
    this.name = name;
  }
  say() {
    console.log(`hi ${this.name}`);
  }
}
const p = new Person("lisi");
p.say(); // hi lisi
