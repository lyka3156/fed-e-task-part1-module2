// 五、请说出下列代码最终输出的结果，并解释为什么。
var a = 10;
var obj = {
  a: 20,
  fn() {
    setTimeout(() => {
      console.log(this.a);
    });
  },
};

obj.fn();

// 1. 执行结果
// 输出20

// 2. 原因
// 匿名函数本身并没有this指向，它的this指向由最近的作用域提供。
