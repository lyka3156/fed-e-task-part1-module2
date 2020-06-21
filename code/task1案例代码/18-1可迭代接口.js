// 18. 迭代器接口   Iterator

// 因为Array,Set,Map都实现了可迭代器接口(Symbol.iterator)，所以能被for...of遍历
console.log(Reflect.has([], Symbol.iterator)); // true
console.log(Reflect.has(new Set(), Symbol.iterator)); // true
console.log(Reflect.has(new Map(), Symbol.iterator)); // true
// Object对象没有实现可迭代器接口(Symbol.iterator)，所以不能被for...of遍历，除非自己手动实现可迭代器接口(Symbol.iterator)
console.log(Reflect.has({}, Symbol.iterator)); // true

// 综上总结： 所有能被 for...of 循环遍历的数据类型,必须实现了可迭代器接口(Symbol.iterator)，它在内部必须挂载一个 Symbol.iterator 方法，这个方法需要返回带有 next 方法的对象，我们不断调用 next 方法就可以实现对数据的遍历
const set = new Set(["foo", "bar", "baz"]);
const iterator = set[Symbol.iterator]();

// for...of 循环的工作原理就是不断调用 next 实现的遍历，我们自己可以使用 while 循环来实现相同的遍历
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
// { value: 'foo', done: false }
// { value: 'bar', done: false }
// { value: 'baz', done: false }
// { value: undefined, done: true }
