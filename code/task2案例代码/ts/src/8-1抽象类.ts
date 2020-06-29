export = {}; // 模块作用域，防止变量冲突

// 8-1 抽象类

abstract class Animal {
  eat(food: string): void {
    console.log(`吃: ${food}`);
  }
  // 抽象方法: 只有声明没有实现，只能通过继承的子类去实现此方法
  abstract run(distance: number): void;
}

class Dog extends Animal {
  // 抽象方法必须重写，不然会编译报错
  run(distance: number): void {
    console.log("四脚爬行", distance);
  }
}

// let a1 = new Animal();       // 无法创建抽象类的实例
const d = new Dog();
d.eat("狗粮"); // 吃: 狗粮
d.run(100); // 四脚爬行 10
