// 慎用全局变量

// 1. 在方法里面使用全局变量
function fn1() {
  name = "lisi";
  console.log(`hello ${name}`);
}
fn1();

// 2. 使用局部变量
function fn2() {
  const name = "lisi";
  console.log(`hello ${name}`);
}
fn2();
