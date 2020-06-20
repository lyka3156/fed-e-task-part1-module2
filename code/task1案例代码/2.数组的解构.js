
// 2. 数组的解构

const arr = [1, 2, 3];

// 以前的写法
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// 数组的解构写法
const [a, b, c, d] = arr;
console.log(a, b, c, d);    // 1,2,3,undefined


const [e, rest] = arr;
console.log(e, rest);   // 1 [2,3]

// 使用场景
const path = "/foo/bar/baz";
const [, rootdir] = path.split("/");
console.log(rootdir);   // foo