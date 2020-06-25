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
// 总结一下

// 生成器函数会帮我们自动返回一个生成器对象，调用这个next方法才会让这个函数体执行，执行过程中一旦遇到yield关键词函数的执行就会被暂停下来，而且yield后面的值将会作为next的结果返回，继续调用next,函数将会在暂停的位置继续开始执行，周而复始一直到这个函数完全结束，那next返回的done值就会变成true
