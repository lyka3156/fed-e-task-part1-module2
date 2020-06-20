// 4.2 标签模板字符串

const str = console.log`hello world`;   // [ 'hello world' ]
const name = "zhangshan";
const gender = true;

// 标签模板函数
// function tagFunc(strings, ...rest) {
//     // strings模板字符串内容分隔过后的结果
//     console.log(strings); // ['hello ', ' is a ', '']
//     // rest所有插入字符串中的表达式的值
//     console.log(rest);  // [ 'zhangshan', true ]

//     // 函数的返回值就是带标签的模板字符串的返回值
//     // return "123";
//     // return strings[0] + rest[0] + strings[1] + rest[1] + strings[2];

//     let strs = "";
//     for (let i = 0; i < strings.length; i++) {
//         strs += strings[i] + (typeof (rest[i]) !== "undefined" ? rest[i] : "");
//     }
//     return strs;
// }

function tagFunc(strings, name, gender) {
    const sex = gender ? "man" : "woman";
    return strings[0] + name + strings[1] + sex + strings[2];
}

const result = tagFunc`hello ${name} is a ${gender}.`;
console.log(result);    // hello zhangshan is a man.