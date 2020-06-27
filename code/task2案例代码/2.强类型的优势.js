
// 2. 强类型的优势

// 在这种情况下，程序不知道element是什么类型，所以没有智能提示，容器导致单词拼错
// function render(element) {
//     element.className = "class1";
//     // innerHTML
//     element.innerHtml = "hi ";
// }


// ======================


// 我们想修改这个a的变量名，但是有好多地方都用到了，就不敢轻易去修改
// const util = {
//     a: () => {
//         console.log("util func");
//     }
// }

// ================

function sum(a, b) {
    // 弱类型语言需要我们自己判断是否是我们需要的类型，如果是强类型语言不是我们需要的类型根本就不会进来，就不需要这段代码去判断类型了
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("arguments must be a number");
    }
    return a + b;
}