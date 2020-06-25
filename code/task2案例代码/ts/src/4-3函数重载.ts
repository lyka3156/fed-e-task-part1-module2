export = {}; // 模块作用域，防止变量冲突

// 4.3 函数重载
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: any, b: any) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(add(20, 20));
console.log(add("Semlinker", " Kakuqo"));
console.log(add("Semlinker ", 20));
console.log(add(20, " Semlinker"));
