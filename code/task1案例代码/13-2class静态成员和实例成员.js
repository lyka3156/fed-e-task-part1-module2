// 13.2 实例成员 和 静态成员

class Person {
  constructor(name) {
    // 实例成员
    this.name = name;
  }
  // 原型上的成员
  say() {
    console.log(`hi ${this.name}`);
  }
  // 静态成员
  static sayStatic(name) {
    console.log(`hi ${name}`);
  }
}

const p = new Person("实例name");
p.say();
Person.sayStatic("静态name");
// hi 实例name
// hi 静态name
