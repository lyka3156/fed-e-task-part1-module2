export = {}; // 模块作用域，防止变量冲突

// 1.4.1 数字枚举

enum Direction1 {
  "A" = 4,
  "B",
  "C",
}
let dir1: Direction1 = Direction1.B;
console.log(dir1);

// 1.4.2 字符串枚举
// enum
enum Direction2 {
  "A" = "A",
  "B" = "B",
  "C" = "C",
}
let dir2: Direction2 = Direction2.B;
console.log(dir2);

// 1.4.3 异构枚举
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
console.log(Enum.A); //输出：0
console.log(Enum[0]); // 输出：A
