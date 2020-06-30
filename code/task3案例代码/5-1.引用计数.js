
// 5.1 引用计数

const obj1 = { age: 18 };
const obj2 = { age: 19 };
const obj3 = { age: 20 };

const ageList = [obj1.age, obj2.age, obj3.age];

function fn() {
    // 代码执行到这里的时候，这里的num1和num2引用数值为1
    const num1 = 1;
    const num2 = 2;
}
fn();
// 当fn()代码执行完，num1和num2的引用数值为0，GC就会回收num1和num2