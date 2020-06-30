
// 3. js 中的引用


let obj = { name: "lisi" }; // obj 就是可达对象
let obj2 = obj;
obj = null;     // 执行完之后 obj还是可达的对象，因为obj2引用了obj