// 13. 描述增量标记算法在何时使用及工作原理。

// 工作原理：
// 把一个完整的垃圾回收任务拆分为很多小的任务，这些小的任务执行时间比较短，可以穿插在其他的 JavaScript 任务中间执行，
// 这样当执行垃圾回收时，就不会让用户因为垃圾回收任务而感受到页面的卡顿了。
