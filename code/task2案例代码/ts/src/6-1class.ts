export = {}; // 模块作用域，防止变量冲突

// 创建Person类
class Person {
  // 实例属性
  name: string; // 声明name属性的类型

  // 静态属性
  static sname: string = "person";

  constructor(name: string) {
    this.name = name; // 前提条件必须先声明此属性的类型
  }

  // 静态方法
  static sayStatic(): void {
    console.log(`hello ${Person.sname}`);
  }

  // 实例方法
  say() {
    console.log(`hello ${this.name}`);
  }
}

let person = new Person("lisi");
person.say();
Person.sayStatic();
