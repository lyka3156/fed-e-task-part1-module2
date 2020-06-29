// 添加属性访问操作
function Person1() {
  this.name = "lisi";
  this.age = 18;
  this.getAge = function () {
    return this.age;
  };
}

const p1 = new Person1();
const a = p1.getAge();

// 直接访问属性操作
function Person2() {
  this.name = "lsi";
  this.age = 18;
}
const p2 = new Person2();
const b = p2.age;
