export = {}; // 模块作用域，防止变量冲突

// 4.3 函数重载
class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: any, b: any) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(20, 20));
console.log(calculator.add("Semlinker", " Kakuqo"));
console.log(calculator.add("Semlinker ", 20));
console.log(calculator.add(20, " Semlinker"));
