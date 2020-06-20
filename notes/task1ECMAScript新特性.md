
# 1. ECMAScript的新特性

## 1.1 理解语言和平台之间的关系 (ECMAScript与JavaScript)
ECMAScript是一门脚本语言(简称es),通常把ECMAScript看做是JavaScript的标准化规范,实际上JavaScript是ECMAScript的扩张语言,因为ECMAScript只提供了最基本的语法(约定了我们的代码如何编写)


浏览器环境的JavaScirpt     
-  由 ECMAScript + Web API组成(BOM + DOM)
 ![avatar](../images/浏览器环境中的js.png)

Node环境的JavaScirpt
-  由 ECMAScript + Node API组成(fs net etc...)
 ![avatar](../images/node环境中的js.png)

 JavaScript语言本身指的就是ECMAScript

## 1.2 ECMAScript的发展过程
从2015年开始 ES 保持每年一个版本的迭代

 ![avatar](../images/ESCMScript的版本历史.png)

 ES2015 开始按照年份命名

## 1.3 EcMaScript2015(es6)的新特性
最新 ECMAScript 标准的代表版本 
- es6 相比于 ES5.1 的变化比较大
- 从这个版本开始，标准命名规则发生变化

好多人喜欢用 ES6 泛指所有的新标准
> 例如使用 es6 的 async+await

> 其实async+await是es2017制定的新特性

> 注意分辨资料中的ES6是指特指还是泛指


重点介绍在ES6 在 ES5.1 基础之上的变化
- 解决原有语法上的一些问题或者不足      
    - let/const快级作用域等等
- 对原有语法进行增强
    - 解构，展开,参数默认值，模板字符串等等 
- 全新的对象、全新的方法、全新的功能
    - promise,proxy,async/await等等
- 全新的数据类型和数据结构
    - Symbol,Set,Map等等

### 1.3.1 let 与 快级作用域 
作用域: 莫个成员能够起作用的范围

在此之前：ES只有两种作用域
-  全局作用域
-  函数作用域

ES6之后又加了一个作用域
- 快级作用域    {}包裹的范围就是快级作用域

let 的特性
- 在块级作用域外面是无法访问块级作用域的
- for循环中解决全局作用域带来的影响  (其实块级作用域内部也使用了闭包)
- for循环内部其实有两层嵌套的作用域
- let 不会变量提升

const 的特点在 let 上加了只读的特性
- 变量一经声明不允许再被修改  (不能重新去指向新的内存地址)

var,let,const使用规范
- 多使用const，其次使用let，尽量不使用var

### 1.3.2 数组的解构
按照数组的顺序进行解构
- 如果解构出来的位置大于数组的长度，解构出来的属性值为undefined
- 如果解构出来的位置小于数组的长度，其他数组的值就不会显示出来

单独解构出来一个属性，并把其他的...解构出来成一个新的数组   (...只能放在解构位置的最后面)
```js
// 写法1
const arr = [1, 2, 3];
const [a, b, c, d] = arr;
console.log(a, b, c, d);    // 1,2,3, undefined
// 写法2
const [e,...rest] = arr;
console.log(e,rest);    // 1    [2,3] 
```

### 1.3.3 对象的解构
按照对象的属性名进行解构
```js
const obj = { name: "zhangshan", age: 20 };
var name = "123";
// 解构左边的属性名的标识符使用
// prop ：重命名属性名
// prop = 默认值
const { name: objName, age, sex = "男" } = obj;
console.log(name, objName, age, sex);
```

解构左边的属性名的标识符使用
-   prop ：重命名属性名
-   prop = 默认值

解构的好处:
- 减化了我们代码的编写
- 我们代码的整体体积也减少了很多

### 1.3.4 模板字符串
模板字符串的作用

- 支持换行（利用于html字符串）
- 支持插值表达式的方式在字符串中去嵌入数值
``` js
const name = "zhangsha";
const str = `hello ${name}
es2015`;
console.log(str);   
// hello zhangsha 
// es2015
```

标签模板字符串  (高级用法)
``` js
const str = console.log`hello world`;   // [ 'hello world' ]
const name = "zhangshan";
const gender = true;
function tagFunc(strings, name, gender) {
    const sex = gender ? "man" : "woman";
    return strings[0] + name + strings[1] + sex + strings[2];
}
const result = tagFunc`hello ${name} is a ${gender}.`;
console.log(result);    // hello zhangshan is a man.


``` 
用处：
- 实现文本的多语言化    (翻译成中文或者英文)
- 检查模板字符串是否存在不安全的字符之内的需求
- 实现小型的模板引擎


### 1.3.5 字符串的扩展方法
- includes()    字符串是否包含这段字符
- startsWith()  字符串是否以这段字符开头
- endsWith()    字符串是否以这段字符结尾
- 相对于之前的indexOf和正则去判断，这上面几种方法方便很多

### 1.3.6 参数默认值
注意：
- 如果有多个参数的话，带有默认值的形参一定要出现在我们参数列表的最后。因为我们的参数是顺序传递的，如果不放在最后，那我们的默认值无法正常工作
``` js
// 使用短路这种方式赋值参数默认值  (不容易区分boolean类型)
function get1(url, method, async) {
    // 缺点： 会将false也变成true
    async = async || true;
    console.log(async);             // true   
}
// 使用参数默认值
function get2(url, method, async = true) {
    console.log(async);         // false
}
get1("getUser", "post", false);
get2("getUser", "post", false);
```

### 1.3.7 ... 的用法
剩余参数  (Rest parameters)

> 这个数组args会在当前位置开始加入所有的形参 (可以取代之前argumengts接受无线参数的方式)

> 只能出现在形参的最后一位，并且只能出现一次
``` js
function foo(first, ...args) {
    console.log(first, args);    // 1 [2,3,4]
}
foo(1, 2, 3, 4);
```

展开数组 (Spread)
```js
const arr = [1, 2, 3];

// 1. 展开数组
// apply原始写法
console.log.apply(console, arr);    // 1 2 3
// 展开运算符写法
console.log(...arr);                // 1 2 3
```

### 1.3.8 箭头函数 (Arrow functions)  =>
箭头函数的语法
- =>左边表达式是参数
- =>右边就是我们函数体，如果右边函数体没有{}，就默认返回右边的值，有{}就需要自己手动返回

``` js
// 传统函数的写法
// function add(num) {
//     return num + 1;
// }
// 箭头函数的写法
const add = num => (num + 1);
console.log(add(123));  // 124
```

箭头函数与this
- 箭头函数中没有this的机制，所以说他不会改变this的指向，也就是说我们箭头函数的外面this是什么，那我们在里面拿到的this就是什么，任何情况下都不会发生改变。
- 箭头函数的this始终指向当前作用域中的this
``` js
const person = {
    name: "tom",
    say1: function () {
        console.log("原始函数", `hi ${this.name}`);
    },
    say2: () => {
        // 这种情况不使用this，因为你当前所在的作用域在window上，而你需要的是person对象
        console.log("匿名函数", `hi ${this.name}`);
    },
    sayAsync1: function () {
        setTimeout(function () {
            console.log("原始函数", `hi ${this.name}`);
        }, 1000);
    },
    sayAsync2: function () {
        // 这种情况使用匿名函数,因为你当前作用域在person中
        setTimeout(() => {
            console.log("匿名函数", `hi ${this.name}`);
        }, 1000);
    }
};
// 传统函数
person.say1();       // 原始函数 hi tom
person.sayAsync1();       // 匿名函数 hi undefined
// 箭头函数 
person.say2();       // 原始函数 hi undefined
person.sayAsync2();       // 匿名函数 hi tom
```


### 1.3.9 对象字面量增强 (Enhanced object literals)
- 变量名与我们要添加到对象的属性名一致的话，可以直接写个属性名就行了
- 对象里面的函数简写方式： 可以省略 :function
- 对象字面量的变量名可以使用动态值了 （计算属性名）
``` js
const foo = "123";
// 传统形式
// const obj = {
//     foo: 123
// };

// es6简写属性的方式
// 1. 变量名与我们要添加到对象的属性名一致的话，可以直接写个属性名就行了
const obj = {
    foo,
    // 2. 对象里面的函数简写方式： 可以省略 :function
    method() {
        console.log(this);  // { foo: '123', method: [Function: method], '0.5249172786043972': 123 }
    },
    // method: function() {
    //     console.log(this);
    // }
    // 3. 对象字面量的变量名可以使用动态值了 （计算属性名）
    [Math.random()]: 123
};
console.log(obj);   // { foo: '123', method: [Function: method], '0.5249172786043972': 123 }
obj.method();
```


### 1.3.10  对象扩展方法

- Object.assign

> 将多个源对象中的属性赋值到一个目标对象中

``` js

const source1 = {
    a: 1,
    b: 1,
    c: 1
}
const source2 = {
    b: 2
}
const target = {
    c: 3,
    d: 3
}
// 第一个参数就是目标对象，其他参数都是源对象
// 总结: 让后面对象的属性去覆盖第一个对象
const result = Object.assign(target, source1, source2);
console.log(result === target);
console.log(result);    // { c: 1, d: 3, a: 1, b: 2 }


// 使用场景
let obj = { name: "张山", age: 20 };
function func(obj) {
    let newObj = Object.assign({}, obj);
    newObj.name = "newName";    // { name: 'newName', age: 20 }
    console.log(newObj);
}
func(obj);
console.log(obj);   // { name: '张山', age: 20 }
```


- Object.is

> 判断两个值是否相等
- 一般不会用到这个方法，严格上来说用===这个比较多
``` js
// 传统写法的问题
console.log(+0 === -0); // true
console.log(NaN === NaN); // false
console.log(NaN == NaN); // false


// es6的Object.is方法       新的比较方法
// 能区分+0和-0
// NaN能全等于NaN
console.log(Object.is(+0, -0)); // false
console.log(Object.is(NaN, NaN));   // true

```

### 1.3.11 proxy 代理对象
- es6 之前监控莫个对象的读写操作 （Object.defineProperty）  vue3.0之前实现双向绑定

- proxy: 为对象设置访问代理器的 (vue3.0使用proxy实现双向绑定)

proxy的基本用法如下
``` js
const person = {
    name: "abc",
    age: 20
};
// proxy返回的就是一个代理之后的对象
// proxy第一个参数是需要代理的目标对象
// 第二个参数是代理的处理对象(get,set,deleteProperty....方法)
const personProxy = new Proxy(person, {
    // get方法监视我们属性的访问
    get(target, property) {
        console.log(`访问了${property}属性`);
        return property in target ? target[property] : undefined;   // 返回属性值
        // return target[property];
    },
    // set方法监视我们设置属性的过程
    set(target, property, value
    ) {
        console.log(`设置了${property}属性`);
        // 在这里可以做属性值的判断
        // 例如： age属性必须是int类型
        if (property === "age" && !Number.isInteger(value)) {
            throw new TypeError(`${property} property is not an int`);
        }
        target[property] = value;   // 设置属性值
    },
});
console.log(personProxy.name);
personProxy.name = "lisi";
personProxy.age = "21";
```
## 1.4 And more