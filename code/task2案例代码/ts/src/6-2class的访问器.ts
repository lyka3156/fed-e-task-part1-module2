export = {}; // 模块作用域，防止变量冲突

// 6.2 访问器
class Employee {
  // private关键词，只能在自己类访问
  private _age: number = 0; // 私有属性，外部访问不了

  // 封装getter方法，让外部间接访问_age属性
  get age(): number {
    return this._age;
  }

  // 封装setter方法，用来修改_age属性，并且在此做校验
  set age(newAge: number) {
    if (newAge > 18) {
      this._age = newAge;
    } else {
      throw new Error("age 必须大于18岁");
    }
  }
}
let employee = new Employee();
employee.age = 20;
console.log(employee.age);
