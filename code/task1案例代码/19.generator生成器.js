// 19. generator 函数

function* foo() {
  console.log(123);
  yield 1;
  console.log(234);
  yield 2;
  console.log(345);
  yield 3;
}

// 生成器对象的next方法和我们迭代器next的返回值是一样的
// 生成器对象也实现了iterable接口，也就是迭代器的协议

const iterator = foo();
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
// 生成器函数的作用
