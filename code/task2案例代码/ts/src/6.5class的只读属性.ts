export = {}; // 模块作用域，防止变量冲突

// 6.5 只读属性
class Person {
  public name: string; // = 'init name'
  private age: number;
  // 只读成员
  protected readonly gender: boolean;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.gender = true;
  }
}

const tom = new Person("tom", 20);
console.log(tom.name);
// tom.gender = false     // 编译报错   readonly修饰的属性只能读不能写
