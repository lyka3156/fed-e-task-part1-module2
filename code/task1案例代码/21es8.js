

// 21 ECMAScript2017  es8

const obj = {
    name: "lisi",
    age: 20
}

// 1. Object.values -----------
console.log(Object.values(obj));    // [ 'lisi', 20 ]

// 2. Object.entries --------------
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
console.log(Object.entries(obj));
// name lisi
// age 20
console.log(new Map(Object.entries(obj)));  // Map { 'name' => 'lisi', 'age' => 20 }

// 3. Object.getOwnPropertyDescriptors -----------
const obj1 = {
    firstName: "li",
    lastName: "si",
    // 向外界提供了一个fullName的只读属性
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
}
console.log(obj1.fullName); // li si

// 1.  通过这种方式拷贝的对象，无法修改拷贝对象的只读属性
const obj2 = { ...obj1 };
obj2.firstName = "wang";
console.log(obj2.fullName);  // li si

// 2. 通过Object.getOwnPropertyDescriptors实现对象的拷贝
const descriptors = Object.getOwnPropertyDescriptors(obj1);
const obj3 = Object.defineProperties({}, descriptors);
obj3.firstName = "wang";
console.log(obj3.fullName);     // wang si

// 4. String.prototype.padStart / String.prototype.padEnd --------
const books = {
    js: 2,
    react: 6,
    vue: 3
}
for (const [name, count] of Object.entries(books)) {
    console.log(`${name.padEnd(16, "-")} | ${count.toString().padStart(3, "0")}`);
}
// js-------------- | 002
// react----------- | 006
// vue------------- | 003

// 5. 在函数参数中添加尾逗号 --------------- 

const arr = [
    1,
    2,
    3,
]