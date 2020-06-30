
// 5.2 对象的循环引用

function fn() {
    // fn执行完后，在这里全局里找不到obj1和obj2，这里的引用数值为0
    const obj1 = {};
    const obj2 = {};
    // 但是,在这里obj1和obj2互相引用了,所以它们的引用数值就不为0了
    obj1.name = obj2;
    obj2.name = obj1;
}
fn();
