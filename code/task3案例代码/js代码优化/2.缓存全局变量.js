// 2. 缓存全局变量

// 1.使用全局变量
var i,
  str = "";
for (i = 0; i < 1000; i++) {
  str += i;
}

// 2. 缓存全局变量
for (let i = 0; i < 1000; i++) {
  let str = "";
  str += i;
}
