// 实现可迭代接口   (Iterable)  [Symbol.iterator]

// 只要我们的对象实现了可迭代接口，就能被for...of遍历了
// const obj = {
//   name: "lisi",
//   age: 20,
//   // Symbol.iterator 方法需要返回带有 next 方法的对象，我们不断调用 next 方法就可以实现对数据的遍历。
//   // 1. Iterable(可迭代接口) 约定了内部必须返回一个迭代器的 Iterator方法
//   [Symbol.iterator]: function () {
//     // 2. Iterator(迭代器接口)    约定了内部必须有一个可以迭代的next方法
//     return {
//       next: function () {
//         // 3. IterationResult(迭代结果接口)
//         // 约定了内部必须有一个value(被迭代到的数据，值是任何类型)和
//         // done(boolean类型，代表迭代有没有结束,true代表遍历完了，没有数据了)属性
//         return {
//           value: "abc",
//           done: true,
//         };
//       },
//     };
//   },
// };
// // 现在遍历obj就不会报错了
// for (let key of obj) {
//   console.log(key);
// }

const obj1 = {
  list: ["foo", "bar", "baz"],
  // Symbol.iterator 方法需要返回带有 next 方法的对象，我们不断调用 next 方法就可以实现对数据的遍历。
  // 1. Iterable(可迭代接口) 约定了内部必须返回一个迭代器的 Iterator方法
  [Symbol.iterator]: function () {
    // 2. Iterator(迭代器接口)    约定了内部必须有一个可以迭代的next方法
    let index = 0;
    let self = this;
    return {
      next: function () {
        // 3. IterationResult(迭代结果接口)
        // 约定了内部必须有一个value(被迭代到的数据，值是任何类型)和
        // done(boolean类型，代表迭代有没有结束)属性
        return {
          value: self.list[index],
          done: index++ >= self.list.length,
        };
      },
    };
  },
};
for (let key of obj1) {
  console.log(key);
}
// foo
// bar
// baz
