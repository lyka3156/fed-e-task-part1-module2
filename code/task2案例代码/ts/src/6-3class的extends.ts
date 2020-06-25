export = {}; // 模块作用域，防止变量冲突

// 6.3 类的继承 extends

// 创建动物类
class Animal {
  name: string; // 实例属性
  constructor(name: string) {
    this.name = name;
  }
  say() {
    console.log("Animal say");
  }
}
// 创建狗类，去继承动物类
class Dog extends Animal {
  constructor(name: string) {
    super(name); // 通过父级的构造函数实现自己的功能
  }

  say() {
    super.say(); // 调用父级的方法
    console.log("Dog say");
  }
}
let dog = new Dog("小狗");
dog.say();
