// 18.3 迭代器模式      (设计模式中的一个)
// 迭代器模式的应用场景: 你我协同开发一个任务清单应用
// 1 我的代码   ===========================
const todos = {
  life: ["吃饭", "睡觉", "打游戏"],
  learn: ["语文", "数学", "英语"],
  work: ["喝茶", "敲代码"],
  // 提供一个统一的外部接口,对于调用者而言就不需要关心我对象的内部结构是什么样，更不用担心我们内部结构改变之后会带来什么影响了
  each: function (callback) {
    const all = [...this.life, ...this.learn, ...this.work];
    for (const item of all) {
      callback(item);
    }
  },
  // 迭代接口和上面也是相同的道理
  [Symbol.iterator]: function () {
    const all = [...this.life, ...this.learn, ...this.work];
    let index = 0;
    return {
      next: function () {
        return {
          value: all[index],
          done: index++ >= all.length,
        };
      },
    };
  },
};
// 2. 你的代码  ===========================
// 2.1 缺点： 上面每加一个功能我就得多写一个for...of循环
// for (const item of todos.life) {
//   console.log(item);
// }
// for (const item of todos.learn) {
//   console.log(item);
// }
// for (const item of todos.work) {
//   console.log(item);
// }

// 2.2 自己实现的统一接口each方法
todos.each(function (item) {
  console.log(item);
});
console.log("---------------------");
// 2.3 自己实现的可迭代接口，通过for...of遍历
for (const item of todos) {
  console.log(item);
}

// 吃饭
// 睡觉
// 打游戏
// 语文
// 数学
// 英语
// 喝茶
// 敲代码
// ------------------
// 吃饭
// 睡觉
// 打游戏
// 语文
// 数学
// 英语
// 喝茶
// 敲代码
