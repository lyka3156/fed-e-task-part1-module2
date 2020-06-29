export = {}; // 模块作用域，防止变量冲突

// 6.4 属性修饰符

// 父类
class Person {
  public name: string; //  哪里都能访问(默认不写就是 public)
  protected age: number; // 当前类和子类可以访问
  private gener: string; // 只能当前类访问

  constructor(name: string, age: number, gener: string) {
    this.name = name;
    this.age = age;
    this.gener = gener;
  }
}

// 子类
class Student extends Person {
  constructor(name: string, age: number, gener: string) {
    super(name, age, gener);
    console.log(this.age); // 20       protected
    // console.log(this.gener);    // 编译报错  private 关键词只能在声明此属性的类访问
  }
}

const p1 = new Person("tom", 20, "男");
console.log(p1.name); // tom             public
// console.log(p1.age); // 编译报错         protected
// console.log(p1.gener); // 编译报错       private
