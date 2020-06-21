// Symbol 补充

// 1. Symbol.for方法相同的字符串得到的symbol是一样的
// 内部维护了一个全局的注册表，为我们的字符串和symbol值提供了一一对应的关系
const s1 = Symbol.for("foo");
const s2 = Symbol.for("foo");

console.log(s1 === s2); // true
// 1.1 for内部会把值变成字符串
console.log(Symbol.for(true) === Symbol.for("true")); // true

// 2. 另外 Symbol 还提供了一些静态常量
console.log(Symbol.iterator); // Symbol(Symbol.iterator)
console.log(Symbol.hasInstance); // Symbol(Symbol.hasInstance)

// 2.1 Symbol.toStringTag 重写对象的 toString方法
const obj = {
  [Symbol.toStringTag]: "XObjecgt",
};
console.log(obj.toString()); // [object XObjecgt]

// 3. 最后 Symbol的属性在for循环里面是拿不到的
const obj3 = {
  [Symbol()]: "XObjecgt",
  foo: "normal value",
};
for (let key in obj3) {
  console.log(key);
}
// foo
// Object.keys方法只能拿到字符串的属性名
console.log(Object.keys(obj3)); // [ 'foo' ]
// JSON.stringify也会忽略Symbol的属性名
console.log(JSON.stringify(obj3)); // {"foo":"normal value"}

// Object.getOwnPropertySymbols只能拿到Symbol的属性名
console.log(Object.getOwnPropertySymbols(obj3)); // [ Symbol() ]
// console.log(Reflect.ownKeys(obj3)); // [ 'foo', Symbol() ]
