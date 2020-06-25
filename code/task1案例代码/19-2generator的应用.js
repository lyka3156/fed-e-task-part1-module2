
// 19-2 generator的应用

// 案例1： 发号器
// 自增id

// 生成自增id的函数     
// 1. 声明生成器函数
function* createIdMaker() {
    let id = 1;
    while (true) {
        yield id++;
    }
}
// 2. 创建生成器对象 (发号器)
let getId = createIdMaker();
// 3. 调用next方法生成自增id
console.log(getId.next().value);        // 1
console.log(getId.next().value);        // 2
console.log(getId.next().value);        // 3
console.log(getId.next().value);        // 4
console.log(getId.next().value);        // 5 

// 案例2： 实现对象的iterator方法

const todos = {
    life: ["吃饭", "睡觉", "打游戏"],
    learn: ["语文", "数学", "英语"],
    work: ["喝茶", "敲代码"],
    // 迭代接口和上面也是相同的道理
    // [Symbol.iterator]: function () {
    //     const all = [...this.life, ...this.learn, ...this.work];
    //     let index = 0;
    //     return {
    //         next: function () {
    //             return {
    //                 value: all[index],
    //                 done: index++ >= all.length,
    //             };
    //         },
    //     };
    // },
    // 利用generator实现iterator方法  (生成器对象内部也实现了iterator(可迭代)接口)
    [Symbol.iterator]: function* () {
        const all = [...this.life, ...this.learn, ...this.work];
        for (const item of all) {
            yield item;
        }
    },
};
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