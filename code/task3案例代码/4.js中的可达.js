
// 4. js 中的可达

function objGrop(obj1, obj2) {
    obj1.next = obj2;
    obj2.prev = obj1;
    return {
        obj1,
        obj2
    };
}
let obj = objGrop({ name: "obj1" }, { name: "obj2" });
console.log(obj);
// {
// obj1: { name: 'obj1', next: { name: 'obj2', prev: [Circular] } },
// obj2: { name: 'obj2', prev: { name: 'obj1', next: [Circular] } }
// }
