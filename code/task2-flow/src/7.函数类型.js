
// @flow

// 7. 函数类型

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(1, 2));

function foo(callback: (string, number) => void) {
    callback("abc", 100);
}
foo(function (str, num) {
    console.log(str, num);
});