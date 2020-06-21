// 13.3 extends 实现继承

class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    console.log(`hi ${this.name}`);
  }
}

// Student 通过 extends 继承    Person
class Student extends Person {
  constructor(name, number) {
    super(name); // 继承自父类的name属性
    this.number = number;
  }

  sayStu() {
    super.say(); // 调用父类的say方法
    console.log(`hi ${this.name}, in ${this.number}`);
  }
}

let stu = new Student("lishi", "430422");
stu.sayStu();

// hi lishi
// hi lishi, in 430422
